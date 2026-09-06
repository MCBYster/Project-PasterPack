# Project PasterPack

一个用于持续开发与维护的 Minecraft 魔改整合包仓库。

## 已纳入版本管理

- `mods/`：当前整合包使用的模组文件。
- `config/` 与 `defaultconfigs/`：模组配置和新世界默认配置。
- `kubejs/`：配方、事件与其他魔改脚本及运行配置。

## 本地使用

1. 使用与整合包相同的 Minecraft / NeoForge 版本建立或打开实例。
2. 将仓库中的 `mods`、`config`、`defaultconfigs`、`kubejs` 合并到实例根目录。
3. 在 `kubejs` 中修改脚本后，通过 GitHub 的提交功能保存变更；本地拉取更新后启动游戏验证。
