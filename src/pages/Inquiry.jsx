// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, useToast } from '@/components/ui';
// @ts-ignore;
import { Package, ArrowLeft, Mail, MapPin, User, Calendar, Scale, Box } from 'lucide-react';

import { useForm } from 'react-hook-form';
import TabBar from '@/components/TabBar';
const Inquiry = ({
  $w
}) => {
  const {
    toast
  } = useToast();
  const form = useForm({
    defaultValues: {
      // 货物信息
      goodsName: '',
      goodsType: 'general',
      weight: '',
      length: '',
      width: '',
      height: '',
      quantity: '',
      // 运输信息
      destination: '',
      shippingType: 'sea',
      expectedDate: '',
      // 联系信息
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      // 备注
      remarks: ''
    }
  });
  const onSubmit = async data => {
    try {
      // 将表单数据转换为数据库格式
      const inquiryData = {
        goodsName: data.goodsName,
        goodsType: data.goodsType,
        weight: parseFloat(data.weight) || 0,
        length: parseFloat(data.length) || 0,
        width: parseFloat(data.width) || 0,
        height: parseFloat(data.height) || 0,
        quantity: parseInt(data.quantity) || 0,
        destination: data.destination,
        shippingType: data.shippingType,
        expectedDate: data.expectedDate || null,
        contactName: data.contactName,
        contactPhone: data.contactPhone,
        contactEmail: data.contactEmail,
        remarks: data.remarks
      };

      // 调用数据模型创建询价记录
      const result = await $w.cloud.callDataSource({
        dataSourceName: 'logistics_inquiry',
        methodName: 'wedaCreateV2',
        params: {
          data: inquiryData
        }
      });
      console.log('询价提交成功:', result);
      toast({
        title: '询价提交成功',
        description: '我们将尽快为您报价，请保持联系方式畅通',
        variant: 'default'
      });

      // 提交成功后重置表单
      form.reset();
    } catch (error) {
      console.error('询价提交失败:', error);
      toast({
        title: '询价提交失败',
        description: error.message || '网络错误，请稍后重试',
        variant: 'destructive'
      });
    }
  };
  const navigateBack = () => {
    $w.utils.navigateBack();
  };
  return <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      {/* 顶部标题栏 */}
      <div className="bg-[#1E293B] text-white p-3">
        <div className="flex items-center mb-1">
          <div className="w-10 h-6 bg-white rounded flex items-center justify-center mr-2">
            <span className="text-xs font-bold text-[#1E293B]">天天</span>
          </div>
          <div className="text-xs text-gray-300">海运</div>
        </div>
        <h1 className="text-lg font-bold mb-1">询价表单</h1>
        <p className="text-xs text-gray-300">请填写货物信息，我们将为您报价</p>
      </div>

      {/* 返回按钮 */}
      <div className="flex items-center p-3 bg-white border-b">
        <button onClick={navigateBack} className="flex items-center text-[#3B82F6]">
          <ArrowLeft className="mr-1" size={16} />
          返回首页
        </button>
      </div>

      {/* 表单内容 */}
      <div className="flex-1 p-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            {/* 货物信息部分 */}
            <div className="bg-white rounded-lg p-3 shadow">
              <div className="flex items-center mb-3">
                <Package className="text-[#3B82F6] mr-2" size={20} />
                <h2 className="text-sm font-bold">货物信息</h2>
              </div>
              
              <FormField control={form.control} name="goodsName" render={({
              field
            }) => <FormItem>
                    <FormLabel>货物名称</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入货物名称" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="goodsType" render={({
              field
            }) => <FormItem>
                    <FormLabel>货物类型</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择货物类型" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">普通货物</SelectItem>
                        <SelectItem value="fragile">易碎物品</SelectItem>
                        <SelectItem value="frozen">冷冻货物</SelectItem>
                        <SelectItem value="dangerous">危险品</SelectItem>
                        <SelectItem value="electronic">电子产品</SelectItem>
                        <SelectItem value="furniture">家具</SelectItem>
                        <SelectItem value="clothing">服装纺织品</SelectItem>
                        <SelectItem value="food">食品</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="weight" render={({
              field
            }) => <FormItem>
                    <FormLabel>货物重量（KG）</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入货物重量" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <div className="grid grid-cols-3 gap-2">
                <FormField control={form.control} name="length" render={({
                field
              }) => <FormItem>
                      <FormLabel>长度（CM）</FormLabel>
                      <FormControl>
                        <Input placeholder="长度" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <FormField control={form.control} name="width" render={({
                field
              }) => <FormItem>
                      <FormLabel>宽度（CM）</FormLabel>
                      <FormControl>
                        <Input placeholder="宽度" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <FormField control={form.control} name="height" render={({
                field
              }) => <FormItem>
                      <FormLabel>高度（CM）</FormLabel>
                      <FormControl>
                        <Input placeholder="高度" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>
              
              <FormField control={form.control} name="quantity" render={({
              field
            }) => <FormItem>
                    <FormLabel>货物数量</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入货物数量" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
            </div>
            
            {/* 运输信息部分 */}
            <div className="bg-white rounded-lg p-3 shadow">
              <div className="flex items-center mb-3">
                <MapPin className="text-[#3B82F6] mr-2" size={20} />
                <h2 className="text-sm font-bold">运输信息</h2>
              </div>
              
              <FormField control={form.control} name="destination" render={({
              field
            }) => <FormItem>
                    <FormLabel>目的地</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入目的地" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="shippingType" render={({
              field
            }) => <FormItem>
                    <FormLabel>运输方式</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择运输方式" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sea">海运</SelectItem>
                        <SelectItem value="air">空运</SelectItem>
                        <SelectItem value="land">陆运</SelectItem>
                        <SelectItem value="express">快递</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="expectedDate" render={({
              field
            }) => <FormItem>
                    <FormLabel>期望发货日期</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入期望发货日期" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
            </div>
            
            {/* 联系信息部分 */}
            <div className="bg-white rounded-lg p-3 shadow">
              <div className="flex items-center mb-3">
                <User className="text-[#3B82F6] mr-2" size={20} />
                <h2 className="text-sm font-bold">联系信息</h2>
              </div>
              
              <FormField control={form.control} name="contactName" render={({
              field
            }) => <FormItem>
                    <FormLabel>联系人姓名</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入联系人姓名" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="contactPhone" render={({
              field
            }) => <FormItem>
                    <FormLabel>联系电话</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入联系电话" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="contactEmail" render={({
              field
            }) => <FormItem>
                    <FormLabel>联系邮箱</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入联系邮箱" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
            </div>
            
            {/* 备注部分 */}
            <div className="bg-white rounded-lg p-3 shadow">
              <div className="flex items-center mb-3">
                <Scale className="text-[#3B82F6] mr-2" size={20} />
                <h2 className="text-sm font-bold">备注信息</h2>
              </div>
              
              <FormField control={form.control} name="remarks" render={({
              field
            }) => <FormItem>
                    <FormLabel>其他说明</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入其他说明" {...field} />
                    </FormControl>
                    <FormDescription>
                      如有特殊要求或注意事项，请在此说明
                    </FormDescription>
                    <FormMessage />
                  </FormItem>} />
            </div>
            
            {/* 提交按钮 */}
            <div className="bg-white rounded-lg p-3 shadow">
              <button type="submit" className="w-full bg-[#3B82F6] text-white p-3 rounded-lg font-bold hover:bg-[#2563EB] transition">
                提交询价
              </button>
            </div>
          </form>
        </Form>
      </div>

      {/* 底部导航栏 */}
      <TabBar activeTab="首页" $w={$w} />
    </div>;
};
export default Inquiry;