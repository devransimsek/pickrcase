# pickrcase

## _This is a test project for Pickr._

## --- Instructions ---

### General

```sh
git clone https://github.com/devransimsek/pickrcase.git
cd pickrcase
npm i
```

### Android

```sh
yarn android
```

if you have seen an error about local.properties file, please create it in android folder and write this code in the local.properties file :

```sh
sdk.dir= your android sdk path
```

### iOS

```sh
cd ios
pod install
cd ..
yarn ios
```

I prefer to use xcode to start the ios project.
