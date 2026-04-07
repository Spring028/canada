// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Package, Search, Calendar, MapPin, Truck, Clock } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Card, useToast } from '@/components/ui';

import TabBar from '@/components/TabBar';
const Orders = props => {
  const {
    toast
  } = useToast();
  const {
    navigateBack
  } = props.$w.utils;
  const [searchValue, setSearchValue] = useState('');
  const mockOrders = [{
    id: 'TT20240621001',
    type: '海运拼箱',
    status: '已认领',
    date: '2024-06-21',
    origin: '深圳',
    destination: '多伦多',
    weight: '25kg',
    progress: 40
  }, {
    id: 'TT20240620002',
    type: '空运',
    status: '待确认',
    date: '2024-06-20',
    origin: '广州',
    destination: '温哥华',
    weight: '5kg',
    progress: 20
  }, {
    id: 'ER20240615003',
    type: '家具专线',
    status: '运输中',
    date: '2024-06-15',
    origin: '上海',
    destination: '蒙特利尔',
    weight: '80kg',
    progress: 70
  }];
  const handleSearch = () => {
    if (searchValue.trim()) {
      toast({
        title: '搜索',
        description: `正在搜索运单：${searchValue}`
      });
    } else {
      toast({
        title: '提示',
        description: '请输入运单号进行搜索'
      });
    }
  };
  const handleOrderClick = order => {
    toast({
      title: '运单详情',
      description: `查看运单 ${order.id}`
    });
    navigateTo({
      pageId: 'order_detail',
      params: {
        orderId: order.id
      }
    });
  };
  const handleBack = () => {
    navigateBack();
  };
  return <div className="bg-gray-50 min-h-screen pb-16">
      {/* 顶部导航 */}
      <div className="bg-[#1E293B] text-white p-4 flex items-center justify-between">
        <Button variant="ghost" onClick={handleBack} className="text-white">
          <Truck className="mr-2" size={20} />
          返回
        </Button>
        <h1 className="text-xl font-bold">我的运单</h1>
        <div className="w-20" />
      </div>

      {/* 搜索区域 */}
      <div className="p-4 bg-white border-b">
        <div className="flex gap-2">
          <Input placeholder="请输入运单号" value={searchValue} onChange={e => setSearchValue(e.target.value)} className="flex-1" />
          <Button onClick={handleSearch} className="bg-[#3B82F6]">
            <Search size={20} />
          </Button>
        </div>
      </div>

      {/* 运单列表 */}
      <div className="p-4 space-y-4">
        {mockOrders.map((order, index) => <Card key={index} className="cursor-pointer hover:bg-gray-50" onClick={() => handleOrderClick(order)}>
            <div className="p-4">
              {/* 运单头部 */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <Package className="text-[#3B82F6] mr-2" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.type}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${order.status === '已认领' ? 'bg-green-100 text-green-600' : order.status === '待确认' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                  {order.status}
                </div>
              </div>

              {/* 运单详情 */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="mr-2" size={16} />
                  <span>{order.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="mr-2" size={16} />
                  <span>{order.origin} → {order.destination}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="mr-2" size={16} />
                  <span>重量：{order.weight}</span>
                </div>
              </div>

              {/* 进度条 */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#3B82F6] h-2 rounded-full" style={{
              width: `${order.progress}%`
            }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">运输进度：{order.progress}%</p>
            </div>
          </Card>)}
      </div>

      {/* 底部导航栏 */}
      <TabBar activeTab="我的" $w={$w} />
    </div>;
};
export default Orders;