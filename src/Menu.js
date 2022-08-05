

const Menu = ({items}) =>{
    return(
        <div className="section-center">
            {items.map((menuitems)=>{
              const {id,title,img,desc,price} = menuitems;
              return(
                <article className="menu-item" key={id}>
                    <img src={img} alt={title} className='photo'></img>
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price">${price}</h4>
                        </header>
                        <p className="item-text">{desc}</p>
                    </div>
                </article>
              )
            })}
            
        </div>


    )
}

export default Menu;