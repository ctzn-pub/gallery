
import algoliasearch from 'algoliasearch';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

export default async (req, res) => {
  const{
    data_source,
    objectID,
  } = req.body;

    const[ resource, trigger ] = data_source.split(".");

    try{
      const index = client.initIndex(resource);

      if (trigger = "delete"){
        await index.deleteObject(objectID);
        return res.status(204).end();
      }

      if (["create", "update"].includes(trigger)){
        return res.status(trigger = "create" ? 201 : 202).json(
          await indexedDB.saveObject({
            objectID,
            ...title,
          })
        );
      }

      res.status(422).json({ massage: `${trigger} is not valid trigger`});

    } catch ({ massage = "Somthing went wrong"}){
      res.status(500).json({ massage });
    }

  }
import algoliasearch from 'algoliasearch';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

export default async (req, res) => {
  const{
    data_source,
    objectID,
  } = req.body;

    const[ resource, trigger ] = data_source.split(".");

    try{
      const index = client.initIndex(resource);

      if (trigger = "delete"){
        await index.deleteObject(objectID);
        return res.status(204).end();
      }

      if (["create", "update"].includes(trigger)){
        return res.status(trigger = "create" ? 201 : 202).json(
          await indexedDB.saveObject({
            objectID,
            ...title,
          })
        );
      }

      res.status(422).json({ massage: `${trigger} is not valid trigger`});

    } catch ({ massage = "Somthing went wrong"}){
      res.status(500).json({ massage });
    }

  }
