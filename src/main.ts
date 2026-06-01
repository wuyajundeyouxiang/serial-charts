// 1. 获取网页上的按钮，"!" 告诉 TS 这个元素绝对存在
const connectBtn = document.getElementById('connect-btn')!;

// 2. 监听点击事件
connectBtn.addEventListener('click', async () => {
  try {
    // 3. 向浏览器请求连接串口，此时 navigator.serial 会获得完美的 TS 类型提示
    const port = await navigator.serial.requestPort();
    
    // 4. 用户选择设备成功后，改变按钮文字
    connectBtn.textContent = "🎉 成功唤醒串口选择！";
    console.log("您选择的硬件串口对象：", port);
    
  } catch (error) {
    // 用户关闭了弹窗没有选设备
    console.log("用户取消了串口选择", error);
  }
});
