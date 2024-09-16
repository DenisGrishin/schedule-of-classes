import { useEffect, useState } from 'react';
import './App.css';
import { getDataBaseFB, getRefFB, getValueFB } from './firebase';
import { useRoutes } from './hooks/useRoutes';

function App() {
  const routes = useRoutes();
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

        console.log('dataItem', dataItem);

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
  return <>{routes}</>;
}

export default App;
// https://react-firebase-auth-db3b9-default-rtdb.europe-west1.firebasedatabase.app
// https://react-firebase-auth-db3b9-default-rtdb.firebaseio.com/
