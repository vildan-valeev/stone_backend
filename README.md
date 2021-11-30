# Settings backend
------------------



# Settings frontend
----------

# Deploy

## Dev

```sh
$ docker-compose -f docker-compose.dev.yml up -d --build
```

## Prod
in front
`chmod +x init-letsencrypt.sh`

`./init-letsencrypt.sh`




```sh
$ docker-compose up -d --build
```
## Enter to container
```sh
$ docker exec -it <id container or name> bash
$ docker exec -it <id container or name> <command>
```
## Database dump/load
```sh
$ python manage.py dumpdata --natural-foreign --natural-primary --exclude=contenttypes --exclude=auth.Permission --exclude=admin.logentry --exclude=sessions.session --indent 4 > default_data.json

$ python manage.py loaddata default_data.json
```
