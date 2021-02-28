import React, {useEffect} from 'react';
import style from './recipe.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recipe = ({title, calories, image, ingredients}) => {
  useEffect(() => {
    AOS.init({duration: 4000});
  }, []);

  return (
    <div className={style.recipe} data-aos="fade-up">
      <h3>{title}</h3>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} className="recipe-image" alt="ingridients images" />
      <p>calories={calories}</p>
    </div>
  );
};

export default Recipe;
