/**
 * @file guide command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const string = require('../../handlers/languageHandler');

exports.run = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.yellow,
      title: 'Bastion Bot - Guide',
      url: 'https://BastionBot.org/',
      description: 'Need help installing and setting up Private Bastion Bot? No worries, we have made an amazing guide to help you out on that. And if you don\'t understand that or you need any more help or maybe if you just have a simple question, just join our Support Server on Discord.',
      fields: [
        {
          name: 'Bastion Bot - Installation Guide',
          value: 'https://BastionBot.org/guide/'
        },
        {
          name: 'Bastion Bot - Support Server',
          value: 'https://discord.gg/fzx8fkt'
        }
      ]
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'guide',
  description: string('guide', 'commandDescription'),
  botPermission: '',
  userPermission: '',
  usage: 'guide',
  example: []
};
