import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["batman"]);

  const onAddCategory = (newCategory) =>{
    
    setCategories([newCategory, ...categories])

  }
  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory onNewCategory={onAddCategory} />
           {
            categories.map((category) =>{
                return (
                  <GifGrid key={category} category={category}/>
                )
            })
           }
    </>
  )
}
