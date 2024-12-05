@echo off

set /a counter=0

for %%f in (*.png) do (
	C:\Users\Stagiaire\Desktop\convertisseur\libwebp-1.4.0-windows-x64\bin\cwebp.exe -q 80 %%f -o %%~nf.webp
	set /A counter=counter+1
)

echo ************************************
echo %counter% files have been processed.
echo ************************************