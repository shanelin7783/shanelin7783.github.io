
def git_creds = '25f2b1e8-c66b-420e-bcc5-2d5613977abb'
def PROJECTS_PATH = "/var/lib/jenkins/workspace/${env.JOB_NAME}"
def BUILD = "${PROJECTS_PATH}/build"
def PUSH_PATH = "${PROJECTS_PATH}/gitPushSpace"
def NEW_BUILD = "${PROJECTS_PATH}/newBuild"
def VERSION_FILE = "${PROJECTS_PATH}/build/BUILD_ID"

node {  
   stage('Initial'){
       
        currentBuild.displayName = "${env.BUILD_NUMBER}"
        git credentialsId: '25f2b1e8-c66b-420e-bcc5-2d5613977abb', url: 'http://10.10.10.53:8888/awesome/lottery_web.git'
        sh('echo $PWD')
        sh('npm i')
        sh('npm run build')
        sh('sh jenkins_build.sh')
        sh """(
            if [ ! -d gitPushSpace ]; then
                mkdir -p gitPushSpace
                chmod 755 gitPushSpace
            else
                rm -fr gitPushSpace
                mkdir -p gitPushSpace
                chmod 755 gitPushSpace
            fi  

        )"""
        ws("${PUSH_PATH}"){
            stage('Push Code') {
               checkout([$class: 'GitSCM', branches: [[name: "*/master"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: git_creds, url: "http://10.10.10.53:8888/awesome/UAT_lottery_web.git" ]]])
                sh """(
                        if [ -d "${PUSH_PATH}" ]; then
                            echo remove the last build
                             rm -rf build/
                            rm -rf static/
                        fi
                        mkdir -p ${PUSH_PATH}/build
                        chmod 755 ${PUSH_PATH}/build
                        mkdir -p ${PUSH_PATH}/static
                        chmod 755 ${PUSH_PATH}/static
                        cp -r ${NEW_BUILD}/build ${PUSH_PATH}
                        cp -r ${NEW_BUILD}/static ${PUSH_PATH}
                        cp -rf ${NEW_BUILD}/next.config.js ${PUSH_PATH}
                        cp -rf ${NEW_BUILD}/server.js ${PUSH_PATH}
                        cp -rf ${NEW_BUILD}/package-lock.json ${PUSH_PATH}
                        cp -rf ${NEW_BUILD}/package.json ${PUSH_PATH}

                )"""

                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: git_creds, usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS'],
                ]){

                    def uploadSpec = readFile VERSION_FILE
                    sh("echo ${uploadSpec}")
                    def version = uploadSpec
                    
                    currentBuild.displayName = "${env.BUILD_NUMBER}_Version:${version}"

                    sh """(
                        git config --global user.email "Jenkins@awesomegaming.com.tw"
                        git config --global user.name "Jenkins"
                        git config --global push.default matching
                        git add -A
                        git commit -m "Jenkins build BuildID-${env.BUILD_ID} Version-${version}"
                        git push http://${env.GIT_USER}:${env.GIT_PASS}@10.10.10.53:8888/awesome/UAT_lottery_web.git HEAD:master -f

                    )"""
                                            
                }
            }
        }
    }
    stage('Clean') {
        ws ("${PROJECTS_PATH}"){
            sh """(
                rm -rf ${BUILD}/
                rm -rf ${NEW_BUILD}/ 
                rm -rf ${PUSH_PATH}/ 
            )"""
        }
    }
}