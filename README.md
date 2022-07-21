# unity-get-version-github-action

![Test][0]

This action returns the version of Unity used in the specified project.
This action is used, for example, to obtain the version to be used when installing Unity.

## Usage

### Simple usage

```yml
- uses: akiojin/unity-get-version-github-action@v1.1.0
  id: unity-get-version
  with:
    project-directory: <Unity project path>

- name: echo Unity version
  env:
    VERSION: ${{ steps.unity-get-version.outputs.version }}
  run: |
    echo $VERSION
```

## Arguments

|Name|Required|Description|
|:--|:--|:--|
|project-directory|`true`|Unity project path|

## License

Any contributions made under this project will be governed by the [MIT License][1].

[0]: https://github.com/akiojin/unity-get-version-github-action/actions/workflows/BuildAndTest.yml/badge.svg
[1]: https://github.com/akiojin/unity-get-version-github-action/blob/main/LICENSE