import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = "database_hack";
  createConnection({
    ...options,
  });
});

// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {})
//   );
//};
