/*
 * Copyright (C) 2017 Sankarsan Kampa
 *                    https://sankarsankampa.com/contact
 *
 * This file is a part of Bastion Discord BOT.
 *                        https://github.com/snkrsnkampa/Bastion
 *
 * This code is licensed under the SNKRSN Shared License. It is free to
 * download, copy, compile, use, study and refer under the terms of the
 * SNKRSN Shared License. You can modify the code only for personal or
 * internal use only. However, you can not redistribute the code without
 * explicitly getting permission fot it.
 *
 * Bastion BOT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY. See the SNKRSN Shared License for
 * more details.
 *
 * You should have received a copy of the SNKRSN Shared License along
 * with this program. If not, see <https://github.com/snkrsnkampa/Bastion/LICENSE>.
 */

exports.run = (Bastion, message, args) => {
  if (Bastion.credentials.ownerId.indexOf(message.author.id) < 0) return Bastion.log.info('You don\'t have permissions to use this command.');
  if (args.length < 1) return;

  let guilds = Bastion.guilds.filter(g => g.name.toLowerCase().includes(args.join(' ').toLowerCase())).map(g => g.name);
  let total = guilds.length;
  guilds = total > 0 ? guilds.slice(0,10).join(', ') : 'None';

  message.channel.sendMessage('', {embed: {
    color: 6651610,
    title: 'Server search',
    description: `Found **${total}** servers with **${args.join(' ')}** in it's name.`,
    fields: [
      {
        name: 'Servers',
        value: guilds
      }
    ]
  }}).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.config = {
  aliases: ['servers']
};

exports.help = {
  name: 'searchserver',
  description: 'Searches for servers, by specified text, the bot is connected to.',
  permission: '',
  usage: 'searchServer <name>',
  example: ['searchServer Bastion']
};