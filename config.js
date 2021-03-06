const host = process.env.HOST;
const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.PASSWORD;
const dialect = process.env.DIALECT;
const senderContainer = process.env.SENDER_CONTAINER;
const converterContainer = process.env.CONVERTER_CONTAINER;
const storage = process.env.STORAGE_CONNECTION_STRING;
const configPath = process.env.CONFIG_PATH;
const hostname = process.env.HOSTNAME;
const brideOId = process.env.BRIDGEOID;
const communityString = process.env.COMMUNITYSTRING;
const bridgeCheckDelay = process.env.DELAY;
const archiveFuncs = process.env.FUNCS_API_URL;
const filesTableR2b = process.env.FILES_TABLE_R2B;
const systemsTable = process.env.SYSTEMS_TABLE;
const subsystemsTable = process.env.SUBSYSTEMS_TABLE;
const keepaliveFolder = process.env.KEEP_ALIVE_FOLDER;
const keepAliveURL = process.env.KEEP_ALIVE_URL;

module.exports = {
  host,
  database,
  username,
  password,
  dialect,
  senderContainer,
  converterContainer,
  storage,
  configPath,
  hostname,
  brideOId,
  communityString,
  bridgeCheckDelay,
  archiveFuncs,
  filesTableR2b,
  systemsTable,
  subsystemsTable,
  keepaliveFolder,
  keepAliveURL
};
