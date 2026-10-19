@echo off
echo ======================================================================
echo Pushing Jaya Raithu Market (FRESHCUTS) to GitHub
echo Remote: https://github.com/DongavathPradeep/FRESHCUTS.git
echo ======================================================================
set PATH=C:\Users\%USERNAME%\AppData\Local\Programs\Git\cmd;%PATH%

git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ------------------------------------------------------------------
    echo Notice: If the repository doesn't exist yet on GitHub:
    echo 1. Open https://github.com/new?name=FRESHCUTS
    echo 2. Click 'Create repository' (leave all checkboxes unselected)
    echo 3. Run this script again or run 'gh auth login'
    echo ------------------------------------------------------------------
) else (
    echo.
    echo Successfully pushed to https://github.com/DongavathPradeep/FRESHCUTS
)

echo.
pause
