# 获取JetBrain全家桶三个月续期
```
/**
     * 方法二：将char直接转化为int，其值就是字符的ascii
     *
     * @param ch
     * @return
     */
    public static byte charToByteAscii2(char ch) {
        byte byteAscii = (byte) ch;

        return byteAscii;
    }

    public static void StringToAscii2Plus3(String str){
        String key = "";
        for(int i = 0; i<str.length(); i++){
            int ascii = charToByteAscii2(str.charAt(i)) - 3;
            key = key+byteAsciiToChar(ascii);
        }
        System.out.println(key);
    }
    /**
     * 同理，ascii转换为char 直接int强制转换为char
     *
     * @param ascii
     * @return
     */
    public static char byteAsciiToChar(int ascii) {
        char ch = (char) ascii;
        return ch;
    }

    public static void main(String[] args) {
        String encrypt = "Qlfh$#Li#|rx#duh#uhdglqj#wklv#|rx#pxvw#kdyh#zrunhg#rxw#krz#wr#ghfu|sw#lw1#Wklv#lv#rxu#lvvxh#wudfnhu#ghvljqhg#iru#djloh#whdpv1#Lw#lv#iuhh#iru#xs#wr#6#xvhuv#lq#Forxg#dqg#iru#43#xvhuv#lq#Vwdqgdorqh/#vr#li#|rx#zdqw#wr#jlyh#lw#d#jr#lq#|rxu#whdp#wkhq#zh#wrwdoo|#uhfrpphqg#lw1#|rx#kdyh#ilqlvkhg#wkh#iluvw#Txhvw/#qrz#lw“v#wlph#wr#uhghhp#|rxu#iluvw#sul}h1#Wkh#frgh#iru#wkh#iluvw#txhvw#lv#‟EhfdxvhFrgh†1#Jr#wr#wkh#Txhvw#Sdjh#dqg#xvh#wkh#frgh#wr#fodlp#|rxu#sul}h1#kwwsv=22zzz1mhweudlqv1frp2surpr2txhvw2";
        StringToAscii2Plus3(encrypt);
    }
```