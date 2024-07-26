import React, { useState } from 'react';

function PromisePage(props) {

    const loop = (name) => {
        // random은 0과1사이의 실수값
        const random = Math.floor(Math.random() * 100) + 1;
        for(let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`);
        }
    }

    const testPromise = async () => {
        loop("test");
        return "test1반복 완료";
    }

    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("test2");
            resolve("test2반복 완료");
        });
    }

    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("test3");
            resolve("test3반복 완료");
        });
    }

    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if(num === 0) {
                reject("4오류!!!");
                return;
            }
            resolve("4성공");
        });
    }

    const testPromise5 = async (num) => {
        console.log("test5");
        if(num === 0) {
            throw new Error("5오류!!!");
        }
        return "5성공";
    }

    const handleClick1 = () => {
        // testPromise1,2,3 작동하고 resolve 작동
        testPromise().then(r => {
            console.log(r);
            testPromise2().then(r => {
                console.log(r);
                testPromise3().then(r => {
                    console.log(r)
                });
            });
        });
    }

    const handleClick2 = async () => {
        const r = await testPromise();
        console.log(r);
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }

    const handleClick3 = () => {
        testPromise4(0)
        .then(r => {
            console.log(r);
            testPromise5(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            });
        })
        .catch(e => {
            console.log(e);
            testPromise5(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            });
        });
    }

    const handleClick4 = async () => {
        try {
            const r4 = await testPromise4(0);
            console.log(r4);
        } catch(e) {
            console.log(e);
        }

        try {
            const r5 = await testPromise5(0);
            console.log(r5);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>
            <button onClick={handleClick2}>버튼2</button>
            <button onClick={handleClick3}>버튼3</button>
            <button onClick={handleClick4}>버튼4</button>
        </div>
    );
}

export default PromisePage;