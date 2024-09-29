import { useEffect, useState } from 'react';
import { authFB, dataBaseFB, getRefFB, getValueFB } from '../API/api';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getUserUID } from '../store/slice/authSlice';

export const Home = () => {
  const [data, setData] = useState();
  const dispatch = useAppDispatch();
  const userUID = useAppSelector((state) => {
    return state.authR.userUID;
  });

  useEffect(() => {
    // Инициализируйте базу данных Firebase с предоставленной конфигурацией
    onAuthStateChanged(authFB, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(getUserUID(uid));
      } else {
        console.log('нет юзера');
      }
    });
    // Ссылка на конкретную коллекцию в базе данных
    const collectionRef = getRefFB(dataBaseFB, 'users/' + userUID);

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
