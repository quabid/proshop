import brcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin user',
    email: 'quobod@gmail.com',
    password: brcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'anita bathe',
    email: 'anita@yahoo.com',
    password: brcrypt.hashSync('123456', 10),
  },
  {
    name: 'loudon claire',
    email: 'loudon@google.com',
    password: brcrypt.hashSync('123456', 10),
  },
];

export default users;
