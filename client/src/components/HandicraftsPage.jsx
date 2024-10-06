// src/components/HandicraftsPage.js

import React from 'react';

// Dummy data for handicraft items
const handicrafts = [
//   {
//     id: 1,
//     name: 'Handmade Pottery',
//     description: 'Beautifully crafted pottery made from natural clay.',
//     image: 'data:image/webp;base64,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', // Replace with a real image URL
//   },
//   {
//     id: 2,
//     name: 'Woven Basket',
//     description: 'A traditional basket made from organic materials.',
//     image: 'data:image/webp;base64,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', // Replace with a real image URL
//   },
//   {
//     id: 3,
//     name: 'Wooden Sculpture',
//     description: 'Intricately carved sculpture from reclaimed wood.',
//     image: 'data:image/webp;base64,UklGRlgaAABXRUJQVlA4IEwaAABwXACdASqgAKAAPm0skUWkIqGYC9XoQAbEpMAFKCkIcyUryv44dTuP/gu+76U/7Du+ueK9QP98347elv71iiceDkR+48F/M/9gkM+J2opbN/su/P5a6iOK/aNAI+vfngfj+cniAeZf/b8Nj1j2Av0T6wv+75GP2v/kewT+xHWs/eb2YP2tLUP2/2Ax2QMh+Z3AKG8jZHVDGJ9jFXlM1t4XCUYnroNS3rkZcFPeUmv9EEGHadgX2J/+fGUTqPKTG4raG7wsEqeYaMPsKjeqOi7gheJ3fmFA/VQR44t3NJQdiDDBbfabv74HIWFbVOGqUTiU8+9XQaHerErQZizgWuHON/6Cw/XjaDxw5ZNUsOsxiPeNUHfqvl7S4oDYYVJPfOB5EMWSyDYz2758LjY+t7Fki/GWagJxeAtUiRyCywe+F6MMGkGbu7UKItLX053fd/OEfz9U5S1jZEayDMnTkYX89x6yeu2v5JfpVxjzE2M7PWH7iNZAQ6IOUsBFIahAYscXb9bwECa0TnnIkY40lh79cRLEx/N7WuhAkP1T2hOymUBl90xPq4PiX4XM1YRCwhm0hHGIW74O9nRHZzLT90TIC2XYzVWEfMbhPyXsZxIHc8d7yhmHcQnHrgvI7rmUlXE7Wsf+xR5Fuvdzf1jqB0P1ikEzbbOWgNvCSqiEPv7m/JuFEuiSudikr6C6Pqn0zH2BzYQQgtwtcjSDHBkR7eO5onUEL3umZin+b+h6mPmIoQZyazmCnI9lUqNelojSc1aGpPrHh2kIBoklbjXgXGv+oB0D0N9H1rvM+G9af3zyDzMZv9HAuFb6YDJPMVXzMabXCYVTPwChG78rQNJLRV5Rp3SuOVGwE5YYwd67dDpE/Rn24wDcNVr9/TCRC7FrxC5/u9xpPDPJmlFK4Q/NTKjnsaIOPL8RtllK2NUnqkK21lJP6NVEdAym4tOf7jL1+DGdcYXWXjdK2Dhm2TpYVikGGOjdUfIPFhrZB7YqAP6t20FW3YkX0z0bLWb+v9fFtwJGkwVPkF1+/GT+ycPFLhkz0zY+mza2O+HGxLo0hcNPlqVrdYwJkkofMQtfdPzJe/XrMxLWvSmDOUiqtm+GqCSu5cuG6L8rhOU7EP+alJJ6Ktj0o2bQYHHaN8pgRLMMFwvyuIeGkdEM2jDHtuQdieu8bucyHDbB+N3h4EbxHVWHUh+yQiNBmM5izf3U5GCWECBO+n33RBZZrlnH+VTBjSXt5kFUamgZNWnXUdkUtwHT1cbTMOoVpCr1L3lnxD3gCGjzqMiFiqddr0WEhCOGwjgKwQ5l3jKbyCD8A/lVfUWcWj9tocMv4uyGPAnu4TLWS9ueKc6bH73Y8Ye5dqV3js6mseOF84zMhHYO8bQvzbSPw//KKjez55qDn3+epU2haQfW8wJuWKETmLlXdpvcBjkg5K6RYmgCLMoc8ecG9tR5nvK3PyUrrkqI2DyMnys3Pl5UAEidf5vgTWUG81S3JVcorNtywWrAefhITbViAQelx1gSRGwJvSYB0vpbVwWG46MsaRnH9ktWUXPQpoeP3HCbygS96opDXY8MQDEgSpHdRfSH2KNL9Brr+8SZOeUXK+OFrbnl8UqWIFEcvK7K+Xiqau0tMCuusFbqmRM5JVY4ZtDP4SEtpP285gzpZ0uD4jAlNfLLsN3UEAh1JUdfVcDlzWFKJ5C+bp6jWEHjxUkAU2+N2AS+91ClGxE8DM5w4yJElXNrD13EEcPqPRpT50hqP3Vz9ZCmEs8a5Srqo1JpyKDZuZkBa8iWo674QG5zUMk1f+Jbas6Ux5pflIzZ83gxyRk4el3Mh2+1JWn5RHIaX4+fT//3WwSwAQ6bb1P2XfgQrFZqQKCZjZhwlSj0Qo/f7Jnaxi2F+2AjilFeRJ6zxCQmTVCOhelEeneraCWMdRflrlsdIyZZ2GFtFrewk6HtjwqTnenexdFXpFrb0Wg4srFWNarGqrVY70iwNqCnDv/S9X58fm6K5zZH+IE3gda/k49fEEZIaM33/FzAMne2R9RAf9kcCcMewf55uBAtLKU2pHB2fi+msnVAtLY0fcNo6cVFrxtaqFuDK1MjMDojuLVAt0tSNUhIMbyiJyYtZMbxYm3w5rGVW7ytJA0i9SY0e+GKCXlBE6C0RmlzaRNIKYmD7fSeOSmCZpZDQoq0jVvl/iwIfmT0n4jTgPQ6FBEzJvYF1o8IIz+bPRs2YReRnh0BkQ1fH0lYglaQV08ZxqSDtz3jkFDS9nZ7fcMRvZv9rFLVZ1IWYLB7c2R1ZrR3XBRZLjIT0Gwl/bNLT5l9++wo/pVDzLVUww+JH+NZa17fFQ7JasDvWbTZJ1g1+oEVmjmAu+8tjHN/QXpqT0pNAUVp+2rGlJL+JTfRmGsYd+5OBbn53AvObtW2ea2wX2YaMMkulo1aiPeSAqJOp4mYHJjU6WJ4B2EP4CXucGzRvkwx5dULT/JQDiY377bkLYW1G+G8f7knYiTLsiC5XUGQIVXEHIAd6xCXv2ewxR7C2VzRl3ANtWdwS8gmAsrsxGiSJNSuQaEge3YhZ4lG3CJkCaqG9iFXUhXHTiqLMBFx1REpBEEznuyUS7eFdJbAUtfI/rAWEv0N88eJg1HhFx1PSeq4Na+NdO8dpmGa17ip5JqCmQI74rlB/enYo7LtLB6yZC5PaexNJ7eda4/h1KF4Ng2tdq4vCDZ2RpFXTQWWD8E246OKLl+lQRa+x77NvEXZXJSeXeB78LFDb6uJwGOyzRuzW4S2wAV68sAi6BiEoh6D9FAQHK+N8XxaF2CY2P4pcY0muLacPaB9CTLDkADqC7JjjZMngscF6FJtBp5tjQWxfopC5HOuO1baKalZkHuecfCsm17ZaGAQIBWZA/KZu2166PPbEqDnWiNPB9PdiDPseI3m6uMjm5XXQ29BeePnWyJlAzaaexDlfYHYGLUneBAhpjN6rYBPNwxvptxd0IFEwMMcyDWv8+iYxc8FjUN4SDlFmDL1z7pBUD7lqv9xDBjUTwHsPusCgXjF7dYYw9lXNJ1ASP0eQ2DhVl5WaEW1suoMDzLO1PpYd+7sDp9pBz/6O2/Pk29ncxJX4KqQeQfG48bRCLIP+n7ek0E4nERgdmNuYuupVgPXvxxVHR78Ze8grHmul0KmyJIFVNpMkuLBd+QTCvpG6Tx5y+qByaoZEk5Jgh+J6swaIS+RGGH03LHnq1qq8jNPpcg/0HAFUqRtqYga+CesHwcL2OxDS/PK87QPpUIZtoJtbPYg1b52yhaGQUMUIthoWCCxPEBVJyb4lRT40Y1Xi51W97oPSGJTVkNf3+Psw0oW7/763DQkFISMFYNn8pcH/w/MBl/TTxBpRutGCZ4gIHMKVTzP2gh1d3Jwgn1XLs3jDNRVWJCZBZd/29XiTTFVfWZJVbk++PkDMDya1eZc1EXOW0VO2f9NPGup+/yqOWIF/03NYyIbAz7ruAiKoO4imGVEn5mn7b32Z0dKdRzD6/OaR8BgkZSQIcck0LlERBg0hwF4JCmnNYxZG+IV8M2136c3Gb/Bn0c/Ggu+5zG6p7vAHhHPAdr+ELiTfVJP2Bj6awTTA1ALlTdVJoFAhzKVjawIBLmmT5bRHO0umgApGgsDmLCLvH+3XCQYSu18W484nduwtRuAfV/Eont5olA7kF/rta1DJdZGbpyfjV6fSTo/XBNB4AYGWeJI0D71Yy4f2TGk2pdfvydEdmFjB/VXimYhKK2grY7ZnrBAHXHkgWtVy5oVXO+sIvrK6MjnHvaO3lFvndhIPWxt7G85qFb3FtYoVqOcYM+DamPO4BQlHuNk9AkaOZonp0FrhAD7m1JD1uK2wr8t7eAwtXqukMvcf8/mqt0AoXtI/Hp6K2aeTzsJ2smiCF2DytZBBqPnKkbXDx5A2qVYh3n/6Ki63lM4gP9uixThLXNgGRQ2mQicEFMxdHacDmOoqoMIFufvuZMaD8htpnRSDSmomf1wjieu5kMs3Jn6+D2Dv39fcf3R/Rlq/bSmzNAc4L3DZhSkn0TcYgXD7rQY3KV6K6s7cgFOWTjy9tbB8tlD1Nir1jMtNatgCoYMnqvXbETATCAfbhHa/Bmh5fFSWA6CNJxsYVYIGpHg07GYdSPT4iVYgM0EvfPfsNz0ttHpESjPu7zntla9jbhkLW4ZK1dXMon8MS5Wfl/sY0CszIxYhjYnqUInht6JoiIUUjvcognW90JOV2B/R/THjKZfA86L5o3WY9fteH53/SlX6Nek7QHU3shDV9tw0u9QWCSJzMYMCb1LR9YPIR/wUksKxSCHl37nysD0tP+pmHOTrRB0pCz+qh06zfBgPzYEkq1O7C657SeRq+OxhkAm+EzyqhZaPtZq6Bv72leaju811BmxiuKqbWbhTOkbEPqkKxsPd/QWcrh4qRfGH+Uf/1cd7M5ci4VoEOPFwFwhZMmOlyNQHtSqEcG/F1BFQCeE3k9uu3D2X+TDDtdIjdv6/ynncnnBvPYGqLfw+12CB8QiIfYBiTXneYSwO5V1ImyS4hV5y6uSeW2HiK9e0kd29II1/Lop+KZfGUHEO5qx4JX32c+3sAemiFnK902YG+a9H9Irnc54+wT3hML9acy0iQ3pP6oTOgY56RTQUC+mJBz0aChvR/heyPGVEqbBcNM9QzlsQignXiSv6xaGcrTaj4zjhrLDaW0NdHxgMTL7zg+JZ7SJVASX6zMHVP7C5/kznwvTngvhcTQL/lA+mbfHfYfaf29eH5LV5XqSNkCvBCNkquKjGraPn3eW/x5Quqpysfyw6cz1zKf6hUpr7EPQkexsPA/EZ9EWYKg6B8n68OQGxoaeUAZzE6f3UEUr3w1PDi01TsIdlT4JJfsDLLvlZZb8VBVuBsEKACkR1lV0pqm0+Fdy9c5ejvGp0o9BPPSLIdhnxy1L2PqylrwXug+M+wggABpz0kmzPmnYyS02wIY55XldktPKX7KK3V1pSYX6+kPefA0FbfBYA66ExUPbF0b1nKG75GiLDNnqloEKm7O0t7JHCzVKIynBp/qFOYZb10n5IM5adJaqgOuTB+iTcFFOFObXiqGZ7rvaKSS/YZkkyJIvMm7utrciQ4SH5YEHkkk/4hDl00/D0t9+Mc5gUNQYH6qlVzzzIAqhsPWMQuNqAcaYPcAwViD/a+GtZ1xbfSolD/QqXgVmXr0L1ljRcpESzc2tKoBAD4fye2NYfSc14a3IAFTrSRpF8AWQJ71s79/gQ8i8bd91SvTUp469JoHlWRAXNQWVC6LEaTtKyKsDIIYPGmCONm/1RKvOsO5jfSQb6GM1P6pM6CwnoQke0XXWLynoO7nNpAh9Ka4klrYpA6aVvHeD5buKAoc4i/ZC81YZAM5ffXIgw2V4t42X+jloBNauPaMhjUrTvMgXePatSJb/rAOp/k2ZBxharXv+iC4QtAnzXnRgIuCKJf8N5s5IZyv4gRj/ZmlTYwxn7rlh08TJb3VQk7XVblIypv2KlluhtIvk0IuDm7/g9Kb9Pd9ooxvW0NVDQVp7m9OglKPr5amlzFxsRt4wI/oTztvCTgNC2HA+/hr34AVvkSfIoOkKzKQln+QUZIb5bIUMTTN0biNRSqK5gcspnGUNxt7HQxPHwZdkvF+t7yfg/Pto41ZRZuAqWfBfccikXGM7fYzq9nTAgmU0hbZj4QBVZHeV2cJ6vblSDhx1/bNr265cv/DfI1ZDBuJeBR45NsUkUtgGKbLSPqOBgrameOct8q71HUiI1X6yJNqFp80dsuskcqANWpvbW0nbUNRxZ+VyeJHk6TDUuoNQkkFT8od8zn9JTTCGIFzWnsGy3zTr06an5WCaJrwZjUTmYpKRkcVQpVTBQNdRRLUQ0/GuGQUKXw/srgNQfV+V4iUYsJn5L9UnEdFTqIY1eKwSjTddifrgD0Zc9TYrye9kK1AI7oDl/CV80BWtwlhzF8FJt0yPzOc/+8xz0Jhsr8vaXcY2X0kUJ0oa2IIhtJgWKkMxG0ElN7Qn+yQTdl10I8mOmZBMes3lY4kmxNYBPNfN3wDJ3QsHdwEnyIrteVWRuBIeUmA9z6DEj5RjasqU+KPGdTfG4AwYu/WgVbxf9+KN95iosZHWwyHJX3bc0XJLEwCqnXBpwrihVC2/a4eAH2UEaeU9CnG2GfinvYzrA/Zmcyoj7OAtEM0Jz7pxatXG3SQqYsPgap4ifV0Bhdx4G3NlT9oZmj6hthv1dV31ZkO1aTPXP8dykS0bylLj2W2Mu9cfH7WmQ87hqS3kcsbnBa17alk4RyVZGwyxFntRg2IsWa4XUGRwXL5zJmPBrefU9ZGycdDMjbbzoMTNvasHMzZn9d3tvYy1mEhjd4cMVpMRl8zmmri1AeajTbjkapFTKEY+Sbxfn7sDjNiBXIZmtO5tWVmWI8kiiSmkAcNpisbftj8uJbzx/OLg+T4foaE3zrFm3yT6qeK517eLnQG/YVwJKrpgF/4wbwa6H2Y4DULDR2pZMcJkuMwnG7UtWG08NyOmoFZfTUDgUJrktrM6IPhaiVorxl4bXsgKQ+sU2kQzj1aINiWoAwqubzL8gy3qt5yr6f+ZkBIGh7V4mj0kDbO5ze9S5vIfSBl3CogOC/hoMZ2d2fmk5euYrfsjtHQ8rsaCfYMaek8bFkXYxrwJKEInJqMrKdQGPmlZupVoQte7KWMGQci2OgNOygS0oaSjJPEfHsekTxn1mugu24AljxxzKOq4AtPW7JfAPVH7nBrrf7D+6s9xF3rmYxC2TQwQZbFH34lR2Rl7VFW/MH8kvq2snvyS8BEIcyFi2fQHCVizhDJYPNDeok5oW6EsjQvfZlwcuuYI8Vb42qzlftw0hJwdE5d0cyI9M6jCLoZKIfffcV2kPhktf7eTOIVEJ+FwhtskGztFEfurLnZ29hID5b8MktCMvQ6iyK9/ZZW+hOWHdP65LWNUXWkcvyhQe6hfWGUFFfpF5spQDqcw2RvCAoe83M0lo6wwyeK/kuAFLhvyhniCsIp2dRz029b+tS4ygnBEkfP0c7HZWfyaQSu0rd2aWcB0PXwW7/TnEaGySquv6a6TW8TDTN0lr+N4N7Ne2IpJ/u04uaKJ0ME6ne5SqARTBxc67MGXIU8RXp7/lvCDtq/a8jC4K7AcU6Al3V74jks530Zu2m4Wvw2SCdxMYSWOhnGzMCEAg9qECdBo89LXj/kvhihabUTVf8iBKzZpQLA8nAtBVItF00K97Rp3KnC5GvO1NGXN8IPR/TBcn/GxvpZhH4B9FzjI1YlsdNdIU8lQ76wJdojsExwf9YHJcjX5luY6yxHzEFii6+lhBR25Fp6y3xE/3x5QOoRyot5QL4kOzCH/93pQqIYbWZd4bQHhhV6auRsh4ZQXLFY/Q7k+XfuY8VxuS7+e1gnnfUIku16Kfoc494ExkY4eT3kC02Jx0zy6nHWSgDWO35ZQDxZccrOF/IGIP5VoGEhZzmOdnlbpzZ/qwK/G2lBZNwqs8uYJisNZOyYRRFTI5C/9/3MTpLvDDiO9kVihMezN4EEXgLlephRoIrm2dHXal0zdw7vn48KjLZqrgt5prms+Eisjai3mBlmmQHVtFUh5IatLxFgAI8csLtzDpwPREN/3oZQMy9iO3TtwUso0Lv3+dxVWSAI9E7CcyrChdXTuhQ6onMpcdB580u2IrIE0CkaI6q5tMVQAlrFpRxJ88XZFaD5GSm93W13tx3BWqCoJ0ywMA1pY6PE4dwoEQ/A00z8078FZO6n0yJPqBJ5dvnSyoZOEH+4be82Lly6y/hg9oGwXst6ocBthVp4XHmv2d68dTwMfB7RNFL+Z5kDozRsZTpYJDkye5leKMwPdyaKpp1QjhJWoDXJIvs1gZy3tnO9VWX5JnqiOvGWDpzw+/vfnb/2O7drBC3qeyln+G6W5iYqK3BbR7AOSTps5VMZyaBFoauHyMYBEgb4b0D5llp4rYcBvt/UmHokJRKg7pwHksn9GUvOHTtfRUYJ7xS+UhcxPxAdheZ70ujBSwLHFgFt7rYqqWb3pIBkZDP4BV75+nQOlsCp2t7do/TP5qQeR/tF2s2zYfzRv6yNkXoXPa9XbzPqcMP+yB/zV2t34fkW6PjCoGSjJCoWUSMmirEfhr8GcDyHCPj6GL+9a6qHSG+ksK4iRBWZ5D4P6CFPLWn/0iIqJth8tTDWaJxSGIVy2eYdx8gpyuNAr85dUhLwNndA5VutMMoOpRdz2Z3iMNI8/D4RtqEdX5T7moehJYvZey/zKNcEW6e1o3JKDOCqTSBXPFyDdnwxuPEb2dQypZD9et3G8Ex5E20fkrlmfWv//LMSYOwIkjpEW3tYAllz0OUMSTo98CeWsXMoHVlIEAzrqTDr6UbAZ78sDzycMKExan4MIUl/A5dpCkMCPZ06JdVss+plYRzSb3uSnH2SubJSAdkU9RgFvVAIJiOw3UrBx/nqIOqtgiM4ShjLQ6auy0ukucTpA+2m1lN/RtFqFJX69p0kR5tTvah6DYjiC8OLjo7GhlBDS/UmFn7700MMwLXlMZZ6OBpgoqnhS+IEzpL8jiR8gVZlgfNTzcrLGwRnBqwx6M9lttoh3BoBMnjjUSwohgSk9x/zZfqV0cyi6TLUz19OpxNvYamAg/4lN4p32zffuOe8UqLixATi4D+212y4/F3KC0dWWfD15IlZEVej4iFKSXIDYCbZGgbg4iAT+0LTCgZjEDoZUYo5OORSA1gCiRZAD/HZ+beUrolNU4wH+JGmCYAdBAoFWyfv1fsUkLBJAO85wtAdFqD/3Z15nMS1VApcjihQGa5ivG/uTb7YoolI0rQmn04Rdst8/nKKafa3h/44EZuraYi7V96h0vPedd9eIi6rJIrdyTLS12X2Mzi1O2iLXdZTkSQ9E/My8uUsWNkB4isHx9y/0Jad+GwgmrIuMdRVUtkQr71uMMLy334matumfYz3OJW42N1TI+2LwtH5vqC66qKr8J3Fens0Nr6hUkbgs67xsAAA=', // Replace with a real image URL
//   },
//   {
//     id: 4,
//     name: 'Handcrafted Jewelry',
//     description: 'Unique pieces of jewelry made by local artisans.',
//     image: 'data:image/webp;base64,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', // Replace with a real image URL
//   },
];

const HandicraftsPage = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Handicrafts</h1>
        <p>Welcome to the Handicrafts section! Here you can find a variety of handmade items.</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {handicrafts.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Coming Soon Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-white-700">Coming Soon!</h2>
          <p className="mt-2 text-lg text-white-600">Stay tuned for some exciting handicraft items!</p>
          <div className="mt-4">
            {/* <img
              src="https://via.placeholder.com/150?text=Coming+Soon" // Placeholder image
              alt="Coming Soon"
              className="mx-auto"
            /> */}
          </div>
        </div>
      </div>
    );
  };

export default HandicraftsPage;




