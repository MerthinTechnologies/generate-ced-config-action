# Generate CED config

Github Action to generate CloudEdgeDistribution config based on discoverability services.

## Inputs

### `cli-token`

CloudEdgeDistribution CLI token. If not specified it'll try to resolve the CLI token from environment variable `CED_CLI_TOKEN`.

### `environment`

Environment to use in CloudEdgeDistribution. If not specified it'll try to resolve it from environment variable `CED_ENVIRONMENT`, it'll use the default environment in ced.json otherwise.

### `path`

Path to the CloudEdgeDistribution project. If not specified it'll try to resolve it from environment variable `CED_PROJECT_PATH`, it'll use current folder otherwise.

### `extra`

Semicolon separated values for extra config parameters (e.g: "param1=value1; param2=value2; paramN=valueN").

## Example usage

```yaml
- uses: MerthinTechnologies/generate-ced-config-action@v1
  with:
    path: ${{ env.PROJECT_FOLDER }}
    cli-token: ${{ secrets.CED_CLI_TOKEN }}
    environment: "production"
    extra: "version=${{ env.VERSION }}
```
