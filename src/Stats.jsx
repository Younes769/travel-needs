function Stats({items}){
    const totalItems=items.length;
    const totalPacked=items.filter((item)=>item.packed).length;
    const percentage= Math.round((totalPacked/totalItems)*100);
    return(
       
        <footer className="stats">
            <em>
                {percentage===100?"everything is there you are ready to go ":`you have packed ${percentage}% of your items`}


            </em>
        </footer>
    )
}
export default Stats;