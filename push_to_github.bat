@echo off
echo ======================================================================
echo Pushing Jaya Raithu Market (FRESHCUTS) to GitHub
echo Remote: https://github.com/DongavathPradeep/FRESHCUTS.git
echo ======================================================================
set PATH=C:\Users\%USERNAME%\AppData\Local\Programs\Git\cmd;%PATH%

echo.
echo Pushing all files, styles, and product images to GitHub...
echo (A GitHub login popup may appear in your browser - please approve it)
echo.

git push -u origin main --force

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ------------------------------------------------------------------
    echo Push failed or was cancelled.
    echo If prompted to sign in, please choose "Sign in with your browser".
    echo ------------------------------------------------------------------
) else (
    echo.
    echo ==================================================================
    echo SUCCESS! All files and images uploaded to:
    echo https://github.com/DongavathPradeep/FRESHCUTS
    echo.
    echo Your website will be live in 1 minute at:
    echo https://dongavathpradeep.github.io/FRESHCUTS/
    echo ==================================================================
)

echo.
pause
