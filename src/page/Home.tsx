import { useEffect, useState } from 'react';
import { getDataBaseFB, getRefFB, getValueFB } from '../API/api';

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // Инициализируйте базу данных Firebase с предоставленной конфигурацией
    const database = getDataBaseFB();

    // Ссылка на конкретную коллекцию в базе данных
    const collectionRef = getRefFB(database, 'your_collection');

    // Функция для извлечения данных из базы данных

    const fetchData = () => {
      // Следите за изменениями в коллекции
      getValueFB(collectionRef, (snapshot: any) => {
        const dataItem = snapshot.val();

        // Проверьте, существует ли элемент данных
        if (dataItem) {
          // Преобразуйте значения объекта в массив
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    };

    // Извлекать данные при монтаже компонента
    fetchData();
  }, []);
  console.log(data);

  return <div>home</div>;
};
