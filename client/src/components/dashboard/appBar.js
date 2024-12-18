

const appBar = ({data}) =>{
    console.log("in data ==>", data)
    const updatedList = data.map((listItems)=>{
        return <> <h1>Title</h1>
                <h5>Comments</h5></>;
    });
        return(
            <div>
                
                {updatedList}
            </div>
        )
    
}

export default appBar