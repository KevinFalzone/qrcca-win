@echo off
setlocal enabledelayedexpansion

set "RootDir=%~dp0"
set R="%RootDir%r\bin\x64\R.exe"
set BASH="%RootDir%git\bin\bash.exe"
set DOTGIT="%RootDir%.git"
set GITREPO="https://github.com/KevinFalzone/qrcca-win"
set runfile="%RootDir%run.R"

if not exist %DOTGIT% (
    echo Erreur: Le dossier .git n'existe pas. Le programme doit être téléchargé à nouveau.
    exit /b 1
)

%BASH% -c 'git config pull.ff only'
%BASH% -c 'git pull -- force %GITREPO%'

%R% --no-save --slave -f %runfile%
exit 0
