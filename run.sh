#! /bin/sh

cd store
python3 /store/manage.py migrate && python3 /store/manage.py runserver 0.0.0.0:80 > logs.txt
