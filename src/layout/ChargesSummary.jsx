import { Table} from "antd";

const ChargesSummary = () => {

    const columns = [
        {
          title: 'Charge',
          dataIndex: 'name',
          key: 'name',
          
        },
        {
          title: 'Unit',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Rate',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
        },
       
        
      ];

    const data = [
        {
          key: '1',
          name: 'Daily',
          age: 32,
          address: '355',
          total: '25'
          
         
        },
        {
          key: '2',
          name: 'Weekly',
          age: 42,
          address: '$256',
          total: '25'
        },
        {
            key: '3',
            name: 'selected car name',
            total: '25'
          },
    
    ]
    
    
    return (
        <div className="">
            <h1 className="border-b-2 border-violet-500">Charge Summary</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default ChargesSummary;