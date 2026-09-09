# Project PasterPack 模组更新核对（2026-09-09）

## 范围与方法

核对对象为 `F:\Minecraft\.minecraft\versions\Project PasterPack\mods` 的 116 个 JAR。

每个可辨认项目均先以 Modrinth 官方 API 的 `game_version=26.1.2`、`loader=neoforge` 条件查找；只有 Modrinth 缺少项目或缺少兼容版本时，才查作者的官方 GitHub Releases。没有把其他 Minecraft 版本、Fabric/Forge 文件或无 JAR 的发布当作可更新项。本报告只记录明确有兼容候选的项目；其余核对结论见后文。

## 明确可更新（稳定/同等预发布渠道）

- **AdvancedLootInfo**：`AdvancedLootInfo-neoforge-26.1.2-2.1.0.jar` → `AdvancedLootInfo-neoforge-26.1.2-1.12.1.jar`。版本号命名从 `2.1.0` 改为 `1.12.1`，但候选由该项目的 Modrinth 26.1.2 NeoForge 文件提供；更新前应在测试实例启动一次。[Modrinth 版本页](https://modrinth.com/mod/PEPVViac/version/4O6ud22p)
- **Applied Energistics 2**：`appliedenergistics2-26.1.10-beta.jar` → `appliedenergistics2-26.1.11-beta.jar`。两者均为 beta，属同一预发布渠道。[Modrinth 版本页](https://modrinth.com/mod/XxWD5pD3/version/AyF0Qu5L)
- **Balm**：`balm-neoforge-26.1.2-26.1.2.12.jar` → `balm-neoforge-26.1.2-26.1.2.14.jar`。[Modrinth 版本页](https://modrinth.com/mod/MBAkmtvl/version/XfUUh0yW)
- **Cooking for Blockheads**：`cookingforblockheads-neoforge-26.1.2-26.1.2.4.jar` → `cookingforblockheads-neoforge-26.1.2-26.1.2.5.jar`。[Modrinth 版本页](https://modrinth.com/mod/vJnhuDde/version/YPxlUgdv)
- **Cyclops Core**：`cyclopscore-26.1.2-neoforge-1.30.3-1086.jar` → `cyclopscore-26.1.2-neoforge-1.30.4-1136.jar`。[Modrinth 版本页](https://modrinth.com/mod/Z9DM0LJ4/version/rGnGA0HI)
- **Easy Villagers**：`easy-villagers-neoforge-1.1.42+26.1.2.jar` → `easy-villagers-neoforge-1.1.43+26.1.2.jar`。[Modrinth 版本页](https://modrinth.com/mod/Kaov2qgi/version/RDYbNBD6)
- **EnderIO Evolution**：`enderio_evolution-4.0.1-NeoForge-26.1.2.jar` → `enderio_evolution-4.0.2-NeoForge-26.1.2.jar`。[Modrinth 版本页](https://modrinth.com/mod/hNO5fwqf/version/sGmxDN9L)
- **EvilCraft**：`evilcraft-26.1.2-neoforge-1.2.103.jar` → `evilcraft-26.1.2-neoforge-1.2.104.jar`。[Modrinth 版本页](https://modrinth.com/mod/3ANq2btA/version/zR4cKSzZ)
- **ExtendedAE**：`ExtendedAE-26.1-1.0.3-neoforge.jar` → `ExtendedAE-26.1-1.0.4-neoforge.jar`。Modrinth 无可用候选，使用作者的官方 GitHub Release。[GitHub Release](https://github.com/GlodBlock/ExtendedAE/releases/tag/26.1-1.0.4-neoforge)
- **Just Enough Characters**：`jecharacters-26.1.2-neoforge-4.6.7.jar` → `jecharacters-26.1.2-neoforge-4.6.8.jar`。[Modrinth 版本页](https://modrinth.com/mod/I7k4B65h/version/KA8WXefs)
- **Just Enough Items (JEI)**：`jei-26.1.2-neoforge-29.36.0.96.jar` → `jei-26.1.2-neoforge-29.37.0.98`。[Modrinth 版本页](https://modrinth.com/mod/u6dRKJwZ/version/zzwHVX9f)；本地 JEI Optimizer 的 NeoForge 元数据要求 JEI `>=29.35.0`，候选满足该范围，仍建议更新后实际启动测试。
- **KubeJS**：`kubejs-neoforge-26.1.2-8.0.4.jar` → `kubejs-neoforge-26.1.2-8.0.5.jar`。[Modrinth 版本页](https://modrinth.com/mod/umyGl7zF/version/aMQ5DcPy)
- **LDLib2**：`ldlib2-neoforge-26.1-26.1.2.38.jar` → `ldlib2-neoforge-26.1-26.1.2.39.jar`。[Modrinth 版本页](https://modrinth.com/mod/B1CBVXHX/version/6BrBuZhI)
- **Modonomicon**：`modonomicon-26.1.2-neoforge-2.3.0.jar` → `modonomicon-26.1.2-neoforge-2.5.0.jar`。[Modrinth 版本页](https://modrinth.com/mod/692GClaE/version/1gp5Vn3B)
- **Mystical Agradditions**：`MysticalAgradditions-26.1.2-9.0.2.jar` → `9.0.3`。[Modrinth 版本页](https://modrinth.com/mod/pl0jGXIx/version/1k8BXOYr)
- **Mystical Agriculture**：`MysticalAgriculture-26.1.2-9.0.7.jar` → `9.0.9`。[Modrinth 版本页](https://modrinth.com/mod/C95ReXie/version/os4OXhWm)
- **Occultism**：`occultism-26.1.2-neoforge-1.248.1.jar` → `occultism-26.1.2-neoforge-1.249.0.jar`。[Modrinth 版本页](https://modrinth.com/mod/sbJh4AZw/version/7WvybN00)
- **Sophisticated Backpacks**：`sophisticatedbackpacks-26.1.2-3.26.1.2130.jar` → `sophisticatedbackpacks-26.1.2-3.26.1.2143.jar`。[Modrinth 版本页](https://modrinth.com/mod/TyCTlI4b/version/OFjt90wE)
- **Sophisticated Core**：`sophisticatedcore-26.1.2-1.5.0.2320.jar` → `sophisticatedcore-26.1.2-1.5.0.2334.jar`。[Modrinth 版本页](https://modrinth.com/mod/nmoqTijg/version/OoXooxvB)
- **XaeroPlus**：`XaeroPlus-2.35.3+neoforge-26.1.2-WM1.45.0-MM26.4.2.jar` → `2.36.0`。候选仍配套 World Map `1.45.0` 与 Minimap `26.4.2`，与当前 Xaero 组件一致。[Modrinth 版本页](https://modrinth.com/mod/EnPUzSTg/version/sJXzO29b)

## 需要先决定的候选

- **Sodium**：`sodium-neoforge-0.9.1+mc26.1.2.jar` 可升至 `0.9.2-beta.1+mc26.1.2`，但候选是 beta。[Modrinth 版本页](https://modrinth.com/mod/AANobbMI/version/Hf1Foc0b)

## 有发布消息但不能安全自动更新

- **Sky Logistics**：本地 `skylogistics-1.0.5+26.1.2.jar`；作者的 [GitHub Release 1.3.0](https://github.com/AmicBeam/sky-logistics/releases/tag/1.3.0) 声明支持 Minecraft 26.1.2/NeoForge，但 Release 没有附带 JAR 资产。不能依据发布文字自行构造下载链接或替换本地文件。

## 应清理的重复文件

- `Cucumber-26.1.2-9.0.5.jar` 与 `Cucumber-26.1.2-9.0.6.jar` 同时存在。Modrinth 的当前兼容版本为 `9.0.6`；`9.0.5` 是重复旧包，应删除而不是与新包并存。

## 已排除的版本与未找到可更新项

- 在已成功匹配 Modrinth 项目的其余模组中，未发现更高的 **26.1.2 + NeoForge** 文件。已排除不同 Minecraft 版本、Fabric/Forge 文件与不匹配的预发布文件。
- `jeioptimizer` 没有自身更新，但其 NeoForge 元数据接受 JEI `>=29.35.0`；JEI 更新已列为可测试的明确候选。
- `pipezlagfix` 已是官方最新版 `26.1.2-1.1.0`：[官方 GitHub Releases](https://github.com/Almana-mc/PipezLagFix/releases)。
- `Catalogue`、`Configured` 的官方 GitHub 26.1.2 文件版本与本地相同，因此不替换。
- `AdvancedCoreInfo`：Modrinth 无项目；作者 GitHub `yanny7/advancedlootinfo` 未提供独立的 AdvancedCoreInfo Release，无法可靠映射。
- `autoresource`：只找到作者的 [Gitee 项目](https://gitee.com/scrambled_egg_with_eek/auto-resource)，未找到可核验的 Modrinth 或 GitHub 26.1.2 NeoForge 更新。
- `CatBurger`、`kubejs_recipe_ui`：没有足以可靠关联官方 Modrinth/GitHub 项目的元数据。
- `cp_lib`（Croparium）：官方 GitHub 最新仍为 `5.0.26`，没有不同于本地的 26.1.2 NeoForge 资产。
- `ElevatorMod`：官方 GitHub 的后续版只针对 26.2，已按游戏版本不兼容排除。
- `EMI`：Modrinth 没有 26.1.2 NeoForge 候选；GitHub 的同代发布也没有比本地 `1.1.24` 更高的适配文件。
- FTB Chunks、Essentials、Library、Quests、Ranks、Teams、Ultimine、XMod Compat：Modrinth 无项目；GitHub Releases 为旧游戏代际，已排除。
- `Highlighter`：Modrinth 有项目，但没有精确的 26.1.2 NeoForge 候选。
- `polymorph_plus`：为 Amine 端口；普通 Polymorph 的 Modrinth 和官方 GitHub Releases 均没有 26.1.2 NeoForge 文件。
- `RootsClassic`、`solcarrot`：Modrinth 无兼容候选，官方 GitHub 亦无可用新发行。
- `sclp-neoforge-5.6.3.1-snapshot+mc26.1-local.jar`、`z_core-0.1.3-26.1.2-neoforge.jar`：无法根据包名或元数据可靠映射到官方项目，暂不操作。
