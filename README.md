# Action: Maven settings

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@edge
```


## Inputs


### `path` (optional)

Default: `$HOME/.m2/settings.xml`

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@edge
  with:
    path: .m2/settings-docker.xml
```


### `profile` (optional)

Default: `github`

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@edge
  with:
    profile: myprofile
```


### `repositories` (optional)

Default: *empty*

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@edge
  with:
    repositories: |
      myrepo:
        url: https://repo.example.com/maven2
```


### `servers` (optional)

Default: *empty*

```yaml
- name: Setup settings for Maven
  uses: k15g/action-maven-settings@edge
  with:
    servers: |
      central:
        username: myuser
        password: mypass
```
