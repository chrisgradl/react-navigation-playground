import {
    DefaultNavigatorOptions,
    DrawerRouterOptions,
    StackRouterOptions,
    TabRouterOptions
} from "@react-navigation/native";
import {StackNavigationOptions} from "@react-navigation/stack";
import {StackNavigationConfig} from "@react-navigation/stack/lib/typescript/src/types";
import {
    BottomTabNavigationConfig,
    BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {DrawerNavigationConfig, DrawerNavigationOptions} from "@react-navigation/drawer/lib/typescript/src/types";

export type StackNavigatorProps = Omit<
    DefaultNavigatorOptions<StackNavigationOptions> &
    StackRouterOptions &
    StackNavigationConfig,
    "children"
    >;

export type BottomTabNavigatorProps = Omit<
    DefaultNavigatorOptions<BottomTabNavigationOptions> &
    TabRouterOptions &
    BottomTabNavigationConfig,
    "children"
    >;

export type DrawerProps = Omit<
    DefaultNavigatorOptions<DrawerNavigationOptions> &
    DrawerRouterOptions &
    DrawerNavigationConfig,
    "children"
    >;
