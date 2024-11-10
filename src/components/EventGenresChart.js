import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular']

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) => {
            const filteredEvents = events.filter((event) => event.summary.includes(genre));
            return {
                name: genre, 
                value: filteredEvents.length 
            };
        });
        return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };
    
    const colors = ['#5F9EA0', '#66CCCC', '#9B59B6', '#DA70D6', '#3e40d6'];

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart 
                margin={{
                    top: 40,
                    botton: 80
                }}>
                <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={150}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {data.map((entry, index) => (  //genre instead of entry??
                    <Cell 
                        key={`cell-${index}`}
                        fill={colors[index]}
                    />
                ))}
                </Pie>
                <Legend
                    align="center"
                    verticalAlign="bottom"
                    layout="horizontal"
                    height={2}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenresChart;