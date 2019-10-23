import React, { useState, useReducer, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Map } from "immutable";
import Big from "big.js";

const initialState = {
    multiple: 1,
    itemList: Map(),
    totalBets: 0,
    maximun: Number(0).toFixed(4),
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, multiple: state.multiple + 1 };

        case "decrement": {
            const multiple = state.multiple - 1;
            return { ...state, multiple: Math.max(multiple, 1) };
        }

        case "change": {
            const { multiple } = action;
            return { ...state, multiple: Math.max(multiple, 1) };
        }

        case "clean":
            return { ...state, multiple: initialState.multiple };

        case "set": {
            const { itemList } = action;
            return { ...state, itemList, totalBets: Number(itemList.size) };
        }

        case "setMaximun": {
            const { maximun } = action;
            return { ...state, maximun };
        }
        default:
            throw new Error();
    }
}

const MultipleContext = React.createContext(initialState);

const MultipleProvider = (props) => {
    const [{ multiple, itemList, totalBets, maximun }, dispatch] = useReducer(reducer, initialState);
    const currency_rate = useSelector((state) => state.Query.currency_rate);

    function incrementMultiple() {
        dispatch({ type: "increment" });
    }

    function decrementMultiple() {
        dispatch({ type: "decrement" });
    }

    function changeMultiple(multiple) {
        dispatch({ type: "change", multiple });
    }

    function inputMultiple(event) {
        const multiple = Number(event.target.value.replace(/\D/g, ""));
        dispatch({ type: "change", multiple });
    }

    function cleanMultiple() {
        dispatch({ type: "clean" });
    }

    function setItemList(itemList) {
        dispatch({ type: "set", itemList });
    }

    function toggleItem(key, value = null) {
        const newItemList = itemList.has(key) ? itemList.delete(key) : itemList.set(key, value);
        setItemList(newItemList);
    }

    function cleanItemList() {
        setItemList(Map());
    }

    function setTotalBets(totalBets) {
        dispatch({ type: "setTotalBets", totalBets });
    }

    function setMaximun(odds, bets = totalBets) {
        const maximun = Big(odds)
            .mul(bets)
            .mul(multiple)
            .toFixed(4);
        dispatch({ type: "setMaximun", maximun });
    }

    const betResult = useMemo(() => {
        const rate = Big(currency_rate);
        return rate
            .mul(totalBets)
            .mul(multiple)
            .toFixed(4);
    }, [totalBets, multiple]);

    const betRate = useMemo(() => {
        const rate = Big(currency_rate);
        return rate
            .mul(multiple)
            .toFixed(4);
    }, [totalBets, multiple]);

    return useMemo(
        () => (
            <MultipleContext.Provider
                value={{
                    multiple,
                    itemList,
                    betRate,
                    betResult,
                    totalBets,
                    setTotalBets,
                    maximun,
                    setMaximun,
                    multipleHandle: {
                        increment: incrementMultiple,
                        decrement: decrementMultiple,
                        change: changeMultiple,
                        input: inputMultiple,
                        clean: cleanMultiple,
                    },
                    itemListHandle: {
                        set: setItemList,
                        toggle: toggleItem,
                        clean: cleanItemList,
                    },
                }}
            >
                {props.children}
            </MultipleContext.Provider>
        ),
        [itemList, multiple, totalBets, maximun],
    );
};

export { MultipleContext, MultipleProvider };
