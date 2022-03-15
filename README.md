# unity-get-version-github-action
This action returns the version of Unity used in the specified project.

## Usage
### Simple usage
```yml
- uses: akiojin/unity-get-version-github-action@v1
  id: unity-get-version
  with:
    project-directory: <Unity project path>

- run: |
  echo ${{ steps.unity-get-version.outputs.version }}
```

## Arguments

|Name|Required|Description|
|:--|:--|:--|
|project-directory|<c>true</c>|Unity project path|

## License
Any contributions made under this project will be governed by the [MIT License][1].

[1]: https://github.com/akiojin/setup-xcode-environemt-github-action/blob/main/LICENSE