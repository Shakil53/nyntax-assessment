import { useQuery } from "@tanstack/react-query";
import { EditOutlined, } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from "react-router-dom";

const { Meta } = Card;


const Home = () => {
    const navigate = useNavigate()
    
    const getData = async() => {
        return  await fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList').then(res => res.json())
    }
    const {data, isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: getData,
    })
    console.log({ isLoading, data });
    
    const handleClick = () =>{
        console.log('clicked');
        const data = {carId: 123, carName: 'Tesla'}
      navigate('/reservation', { state :data})
    }

    return (
        <div className='max-w-[1280px] mx-auto mt-10 flex gap-5'>
            {
                data?.data.map(item => 
                    <div key={item.id}>

        <Card style={{
              width: 300 }} cover={
                <img
                    className="w-60 h-52"
                alt="example"
                src={item.imageURL}
              />
            }
            onClick={handleClick}
            actions={[
                
            <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={item.imageURL} />}
              title= {item.make}
              description={item.model}
            />
          </Card> 

                    </div>
                )
            }
             
        </div>
    );
};

export default Home;
