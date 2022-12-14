const core = require('@actions/core');

const commitMessage = core.getInput('commit_message');

const messageDelimiter = '---';
const jiraDelimiter = 'JIRA tickets:';
const versionDelimiter = 'New version bump type:'

if (!commitMessage.includes(messageDelimiter)) {
  throw new Error('No delimiter found in the commit message. Add the `---` delimiter to the commit message.');
}

if (!commitMessage.includes(jiraDelimiter)) {
  throw new Error('No delimiter found in the commit message. Add the `JIRA tickets:` delimiter to the commit message.');
}

if (!commitMessage.includes(versionDelimiter)) {
  throw new Error('No delimiter found in the commit message. Add the `New version bump type:` delimiter to the commit message.');
}

const [message, rest] = commitMessage.trim().split(messageDelimiter);
const [links, version] = rest.split(versionDelimiter);
const linksList = links.trim().split(jiraDelimiter)[1].split(',');

const newMessage = message.trim();
const newLinksList = linksList.map(link => link.trim());
const newVersionBump = version.trim();

core.setOutput('message', newMessage);
core.setOutput('links_list', newLinksList);
core.setOutput('bump_type', newVersionBump);
