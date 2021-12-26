# Action: Maven settings

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@v1
```


## Inputs


### `path` (optional)

Default: `$HOME/.m2/settings.xml`

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@v1
  with:
    path: .m2/settings-docker.xml
```


### `profile` (optional)

Default: `github`

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@v1
  with:
    profile: myprofile
```


### `repositories` (optional)

Default: *empty*

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@v1
  with:
    repositories: |
      myrepo:
        url: https://repo.example.com/maven2
```


### `include` (optional)

Default: *empty*

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@v1
  with:
    include: |
      - spring-releases
```

Available known repositories:

* `sonatype`
* `spring-releases`
* `spring-snapshots`


### `servers` (optional)

Default: *empty*

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@v1
  with:
    servers: |
      central:
        username: myuser
        password: mypass
```
