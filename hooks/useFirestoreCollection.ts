import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from '../firebase';

type FirestoreCollectionOptions = {
  orderByField?: string;
  orderDirection?: 'asc' | 'desc';
};

function useFirestoreCollection<T>(
  collectionName: string,
  options?: FirestoreCollectionOptions,
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let q = query(collection(db, collectionName));

        if (options?.orderByField) {
          q = query(
            q,
            orderBy(options.orderByField, options.orderDirection || 'asc'),
          );
        }

        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(documents);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, options?.orderByField, options?.orderDirection]);

  return { data, loading, error };
}

export default useFirestoreCollection;
