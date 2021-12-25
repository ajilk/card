#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';

const data = {
  name: chalk.white('Azimjon Ilkhomov'),
  username: chalk.cyan('@ajilk'),
  work: chalk.white('Software Engineer @ Fidelity Investments'),
  twitter: chalk.cyan('https://twitter.com/ajilkhomov'),
  github: chalk.cyan('https://github.com/ajilk'),
  linkedin: chalk.cyan('https://linkedin.com/in/ajilk'),
  web: chalk.cyan('https://ajilk.com'),
  languages: chalk.cyan('typescript, python, java, c++, sql, bash'),
  technologies: chalk.cyan('aws, angular, ngrx, flutter, spring boot')
}

const work = `${chalk.white.bold('Work:')}          ${data.work}\n\n`
const website = `${chalk.white.bold('Website:')}       ${data.web}\n`
const github = `${chalk.white.bold('Github:')}        ${data.github}\n`
const linkedin = `${chalk.white.bold('LinkedIn:')}      ${data.linkedin}\n`
const twitter = `${chalk.white.bold('Twitter:')}       ${data.twitter}\n\n`
const languages = `${chalk.white.bold('Languages:')}     ${data.languages}\n`
const technologies = `${chalk.white.bold('Technologies:')}  ${data.technologies}`

const options = { padding: 1, margin: 1, borderStyle: 'single', title: `${data.name} / ${data.username}`, titleAlignment: 'center' }
const output = work + website + github + linkedin + twitter + languages + technologies
console.log(chalk.cyan(boxen(output, options)))