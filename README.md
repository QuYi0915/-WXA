# -WXA

**h5��Ƶ���ţ�����΢���������΢��������Զ�������Ƶ**

����webAudio API���ͬʱ���Ŷ�����������΢��������������ֲ����Զ���������

###1.����$WXA��

```
   <script src="WXA.js"></script>
```

###2.������Ƶ��
```
   var source = $WXA.init(url, autoplay, loop);
```
- url��string ��Ƶ�ļ�·��������·�����·�����ɣ�;
- autoplay��Boolean �Ƿ��Զ�����;
- loop:Boolean ���ź��Ƿ�ѭ������;
- ����AudioBufferSourceNode���ڲ���;

###3.������Ƶ��
```
    $WXA.start(source);
```
- source��������Ƶʱ���ص�AudioBufferSourceNode;

##ע�⣺�Զ����ŵ���Ƶ���������µ���start�������в���