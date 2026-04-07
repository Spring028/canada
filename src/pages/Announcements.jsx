// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Bell, ArrowRight, AlertTriangle, Info, Star } from 'lucide-react';
// @ts-ignore;
import { Button, Card, useToast } from '@/components/ui';

import TabBar from '@/components/TabBar';
const Announcements = props => {
  const {
    toast
  } = useToast();
  const {
    navigateBack,
    navigateTo
  } = props.$w.utils;
  const mockAnnouncements = [{
    id: 1,
    title: '违禁品零容忍政策公告',
    date: '2024.06.21',
    type: 'important',
    content: '为保障绝大多数客人的权益，也为杜绝海运运输违禁品的现象，提升海运服务的品质，今日起我司将对违禁品采取零容忍政策。',
    icon: AlertTriangle
  }, {
    id: 2,
    title: '海运航线调整通知',
    date: '2024.06.18',
    type: 'info',
    content: '由于港口容量调整，从本月开始部分航线发船时间将有所调整，请及时关注船期信息。',
    icon: Info
  }, {
    id: 3,
    title: '端午节放假安排',
    date: '2024.06.10',
    type: 'normal',
    content: '端午节期间客服服务时间调整为9:00-18:00，紧急情况请拨打热线电话。',
    icon: Bell
  }, {
    id: 4,
    title: '新用户优惠活动',
    date: '2024.06.05',
    type: 'promo',
    content: '新注册用户首单享9折优惠，活动截止至6月30日，欢迎参与。',
    icon: Star
  }];
  const handleAnnouncementClick = announcement => {
    toast({
      title: '公告详情',
      description: `查看公告：${announcement.title}`
    });
    navigateTo({
      pageId: 'announcement_detail',
      params: {
        id: announcement.id
      }
    });
  };
  const handleBack = () => {
    navigateBack();
  };
  const getTypeStyles = type => {
    switch (type) {
      case 'important':
        return {
          badge: 'bg-red-100 text-red-600',
          iconColor: 'text-red-600'
        };
      case 'info':
        return {
          badge: 'bg-blue-100 text-blue-600',
          iconColor: 'text-blue-600'
        };
      case 'promo':
        return {
          badge: 'bg-yellow-100 text-yellow-600',
          iconColor: 'text-yellow-600'
        };
      default:
        return {
          badge: 'bg-gray-100 text-gray-600',
          iconColor: 'text-gray-600'
        };
    }
  };
  return <div className="bg-gray-50 min-h-screen pb-16">
      {/* 顶部导航 */}
      <div className="bg-[#1E293B] text-white p-4 flex items-center justify-between">
        <Button variant="ghost" onClick={handleBack} className="text-white">
          <ArrowRight className="mr-2" size={20} />
          返回
        </Button>
        <h1 className="text-xl font-bold">公告消息</h1>
        <div className="w-20" />
      </div>

      {/* 公告列表 */}
      <div className="p-4 space-y-4">
        {mockAnnouncements.map(announcement => {
        const IconComponent = announcement.icon;
        const styles = getTypeStyles(announcement.type);
        return <Card key={announcement.id} className="cursor-pointer hover:bg-gray-50" onClick={() => handleAnnouncementClick(announcement)}>
              <div className="p-4">
                {/* 公告头部 */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <IconComponent className={`${styles.iconColor} mr-2`} size={24} />
                    <div>
                      <h3 className="font-bold text-lg">{announcement.title}</h3>
                      <p className="text-sm text-gray-500">{announcement.date}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${styles.badge}`}>
                    {announcement.type === 'important' ? '重要' : announcement.type === 'info' ? '通知' : announcement.type === 'promo' ? '优惠' : '普通'}
                  </div>
                </div>

                {/* 公告内容摘要 */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {announcement.content}
                </p>

                {/* 查看详情按钮 */}
                <div className="mt-3 flex items-center text-[#3B82F6] text-sm">
                  <span>查看详情</span>
                  <ArrowRight className="ml-1" size={16} />
                </div>
              </div>
            </Card>;
      })}
      </div>

      {/* 底部导航栏 */}
      <TabBar activeTab="首页" $w={$w} />
    </div>;
};
export default Announcements;