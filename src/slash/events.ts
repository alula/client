import { CommandRatelimit as CommandRatelimitCache, CommandRatelimitItem } from '../commandratelimit';

import { FailedPermissions, ParsedArgs, SlashCommand } from './command';
import { SlashContext } from './context';


export namespace SlashCommandEvents {
  export interface CommandError {
    command: SlashCommand,
    context: SlashContext,
    error: Error,
    extra?: Error,
  }

  export interface CommandFail {
    args: ParsedArgs,
    command: SlashCommand,
    context: SlashContext,
    error: Error,
  }

  export interface CommandPermissionsFailClient {
    command: SlashCommand,
    context: SlashContext,
    permissions: FailedPermissions,
  }

  export interface CommandPermissionsFail {
    command: SlashCommand,
    context: SlashContext,
    permissions: FailedPermissions,
  }

  export interface CommandRatelimit {
    command: SlashCommand,
    context: SlashContext,
    global: boolean,
    now: number,
    ratelimits: Array<{
      item: CommandRatelimitItem
      ratelimit: CommandRatelimitCache,
      remaining: number,
    }>,
  }

  export interface CommandRan {
    args: ParsedArgs,
    command: SlashCommand,
    context: SlashContext,
  }

  export interface CommandRunError {
    args: ParsedArgs,
    command: SlashCommand,
    context: SlashContext,
    error: Error,
  }
}
