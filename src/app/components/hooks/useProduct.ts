// useSingleData.ts
import { useState, useEffect } from 'react';

type Course = {
  product: string;
};

const useSingleData = (
  courses: Course[],
  product: string | undefined
): Course | undefined => {
  const [singleData, setSingleData] = useState<Course | undefined>(undefined);

  useEffect(() => {
    const foundData = courses.find((item) => item.product === product);
    setSingleData(foundData);
  }, [courses, product]);

  return singleData;
};

export default useSingleData;
