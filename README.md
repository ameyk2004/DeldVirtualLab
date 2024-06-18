# Digital Electronics Virtual Laboratory

<p align="center"><img src="https://socialify.git.ci/ameyk2004/DeldVirtualLab/image?font=Raleway&amp;logo=https%3A%2F%2Fdeldvirtuallab.netlify.app%2FResources%2Fcircuit-icon-png-2.jpg&amp;name=1&amp;owner=1&amp;pattern=Circuit%20Board&amp;theme=Light" alt="project-image"></p>

## Description

This project serves as a comprehensive simulator for Digital Electronics Laboratory (DELD) experiments, closely mirroring the practical exercises typically conducted in educational institutions like yours. It offers a user-friendly platform where users can virtually engage with and explore a wide array of pre-designed digital circuits, facilitating practical learning and experimentation in digital electronics.

The simulator aims to replicate the laboratory experience by providing an interface where users can interact with predefined experiments, observe their behavior, and validate theoretical concepts through simulation. Instead of physically constructing circuits, users navigate through a curated selection of experiments, input signals, and analyze output responses.
The simulator includes features such as:
- Pre-designed experiments covering various topics in digital electronics
- Interactive exploration of circuit behavior
- Real-time simulation of signal propagation and logic operations
- Detailed documentation and instructions for each experiment

---
## Index
1. <a href="#half-adder">Half Adder</a>
2. <a href="#full-adder">Full Adder</a>
3. <a href="#bcd-to-xs3-converter">BCD to XS3 Converter</a>
4. <a href="#binary-to-gray-code-converter">Binary to Gray Code Converter</a>
5. <a href="#bcd-adder">BCD Adder</a>
6. <a href="#multiplexer">Multiplexer</a>
7. <a href="#demultiplexer">Demultiplexer</a>
8. <a href="#1-bit-comparator">1-bit Comparator</a>
9. <a href="#2-bit-comparator">2-bit Comparator</a>
10. <a href="#parity-checker">Parity Checker</a>
11. <a href="#parity-generator">Parity Generator</a>
12. <a href="#flip-flop-conversion">Flip Flop Conversion</a>
13. <a href="#up-counter">Up Counter</a>
14. <a href="#down-counter">Down Counter</a>
15. <a href="#up-down-counter">Up-Down Counter</a>
16. <a href="#decade-counter">Decade Counter</a>
17. <a href="#sequence-detector">Sequence Detector</a>
18. <a href="#shift-registers">Shift Registers</a>


## <span id="half-adder">Assignment 1</span> - Half Adder

```
Half Adder is a combinational logic device, which has two inputs & two outputs, Sum and Cary out.
A half adder is a digital circuit that takes a two input signal and produces two outputs
```

---
## <span id="full-adder">Assignment 2</span> - Full Adder

```
Full Adder is a combinational logic device that adds three binary digits together, two inputs and a carry in, to generate two outputs, a sum and a carry out.

Full Adder is a combinational logic device, which has three inputs & two outputs, Sum and Cary out.The IC 74LS83 is a Full Adder with Carry in and Carry out feature. It is a four stage 4-bit counter, meaning it has four individual Full adder circuits each of 4-bit inside a single package.
It is a 16-pin dual packaged IC.
```

---
## <span id="bcd-to-xs3-converter">Assignment 3</span> - BCD to Excess 3

```
BCD (Binary Coded Decimal) to XS3 (Excess-3) Converter is a digital circuit used to convert Binary Coded Decimal (BCD) numbers into Excess-3 (XS3) code. BCD is a binary representation of decimal numbers, where each decimal digit is represented by a 4-bit binary code. XS3 code, also known as XS-3 or 8421 code, is an excess-3 binary code where each digit is represented by adding 3 to the corresponding BCD code.

In telecommunication, the term code conversion has the following meaning : Conversion of signals, or groups of signals, in one code into corresponding signals, or groups of signals, in another code.
```

---
## <span id="binary-to-gray-code-converter">Assignment 4</span> - Binary to Gray

```
A Binary to Gray Code Converter is a digital circuit used to convert binary numbers into Gray code. Gray code, also known as reflected binary code, is a binary numeral system where successive values differ in only one bit position.

A code converter is a logic circuit that changes data presented in one type of binary code to another type of binary code, such as BCD to binary, BCD to 7 segment, binary to BCD, BCD to XS3, binary to Gray code, and Gray code to binary.
```
---
## <span id="bcd-adder">Assignment 5</span> - BCD Adder

```
A BCD (Binary Coded Decimal) Adder is a combinational logic circuit used to perform addition operations on Binary Coded Decimal numbers. 
BCD is a binary representation of decimal numbers, where each decimal digit is represented by a 4-bit binary code. BCD adders take two BCD numbers as input and produce the BCD sum along with a carry output, if applicable.

A BCD Adder is a digital circuit specifically designed to add Binary Coded Decimal numbers. In BCD representation, each decimal digit is encoded using a 4-bit binary code. The BCD Adder follows specific rules to perform addition on BCD numbers, ensuring that the result is a valid BCD representation. This is commonly utilized in applications where decimal arithmetic is required, such as in digital displays and calculators.
```
---
## <span id="multiplexer">Assignment 6</span> - Multiplexer

```
A Multiplexer, often abbreviated as MUX, is a digital circuit that selects one of several input signals and forwards the selected input to a single output line. 
Multiplexers are fundamental components in digital systems used for data routing and signal selection.

Multiplexer is a combinational logic device, which has many input & one output, this output can be selected according to select input. IC-74LS153 is Dual 4:1 MUX. It is a 16-pin dual in-line packaged IC, which has two enable pins (STROBE Active Low). We can design 8:1 MUX using cascading of Two 4:1 MUX. This is achieved with the help of enable / strobe inputs and multiplexer tree is designed. To implement 8:1 MUX we need 3 select lines and one output.
```
---

## <span id="demultiplexer">Assignment 7</span> - Demultiplexer

```
A Demultiplexer, often abbreviated as DEMUX, is a digital circuit that takes a single input and selects one of many possible outputs based on a control signal. 
Demultiplexers are the inverse of multiplexers and are used for distributing a single input signal to multiple output channels.

Demultiplexer/Decoder is a combinational logic device, which has one input & many output, one output can be selected according to select input. IC 74155 is a dual 1:4 line demultiplexer with individual strobe inputs. Based on the status of select lines, the input at the input pin is given out on one of the four output pins.IC-74LS138 is 3 to 8 Line Decoder/Demultiplexer.
It is a 16-pin dual packaged IC, which has three enable pins (2-STROBE Active Low and one Active High). IC-74LS138 produces complementary output. i.e. the output of 74LS138 is Active Low. We can design any combinational circuits using IC-74LS138. DEMUX/Decoder performs reverse operation to that of Multiplexer.
```
---
## <span id="1-bit-comparator">Assignment 8</span> - 1 Bit Comparator

```
A 1-bit Comparator is a digital circuit used to compare two binary numbers of one bit each and determine their relationship, such as equality, greater than, or less than. 
It is a fundamental building block in digital systems for decision-making and control logic.

Magnitude Comparator is a logical circuit, which compares two Signals A and B and generates three logical outputs, whether A > B, A = B, or A < B.

A one-bit digital magnitude comparator is a simple circuit that compares two single binary digits (0 or 1). It determines whether one bit is greater than, less than, or equal to the other.
```

---
## <span id="2-bit-comparator">Assignment 9</span> - 2 Bit Comparator

```
A 2-bit Comparator is a digital circuit used to compare two binary numbers of two bits each and determine their relationship, 
such as equality, greater than, or less than. It is an essential component in digital systems for decision-making and control logic involving two-bit binary inputs.

A comparator used to compare two binary numbers each of two bits is called a 2-bit Magnitude comparator.
```

---
## <span id="parity-checker">Assignment 10</span> - Parity Checker

```
A Parity Checker is a digital circuit used to detect errors in binary data transmission by examining the parity of the received data. 
Parity checking is a method of error detection where an extra bit, known as the parity bit, is added to the data stream. 

The parity checker compares the received data along with the parity bit and determines whether the transmission is error-free or if errors have occurred during transmission.

A Parity Checker is a crucial component in digital systems for ensuring the integrity of transmitted data. It operates by examining the binary representation of the data and checking whether the number of set bits (binary 1s) is even or odd. The inclusion of a parity bit, an extra bit appended to the data, facilitates this error-checking process.
```

---
## <span id="parity-generator">Assignment 11</span> - Parity Generator

```
A Parity Generator is a digital circuit used to generate parity bits for error detection in binary data transmission.
Parity generation involves adding an extra bit, known as the parity bit, to the data stream based on specific rules or algorithms. 
The resulting data stream with the parity bit reflects a predetermined parity property, such as even parity or odd parity.
```

---
## <span id="flip-flop-conversion">Assignment 12</span> - Flip Flop Conversions

```
Flip Flop Conversion refers to the process of converting one type of flip-flop into another while maintaining its functionality. 
Flip-flops are fundamental building blocks in digital circuits for storing binary data and maintaining state information. 

Different types of flip-flops, such as D flip-flops, JK flip-flops, and T flip-flops, have distinct characteristics and applications. Flip-flop conversion techniques allow designers to implement desired functionality using a suitable flip-flop configuration.

Conversion of D Flip Flop to SR Flip Flop
D is the actual input of the flip flop and S and R are the external inputs. Eight possible combinations are achieved from the external inputs S, R and Qp. But, since the combination of S=1 and R=1 are invalid, the values of Qp+1 and D are considered as “don’t cares”. The logic diagram showing the conversion from D to SR, and the K-map for D in terms of S, R and Qp are shown below.
```

---
## <span id="up-counter">Assignment 13</span> - Up Counter

```
An Up Counter is a digital circuit that counts upwards from a starting value to an ending value, following a predetermined sequence. 
It is a type of counter commonly used in digital systems to track the occurrence of events, generate timing signals, or implement sequential logic operations.

An Up Counter is a fundamental component in digital systems used for counting events or occurrences. Unlike a general counter, the Up Counter is designed to increment its count value in a sequential manner, moving from a lower value to a higher value. It is commonly employed in various applications such as timers, frequency dividers, and digital clocks to track and display the passage of time or events.
```

---
## <span id="down-counter">Assignment 14</span> - Down Counter

```
A Down Counter is a digital circuit that counts downwards from an initial value to a final value, following a predetermined sequence. 
It operates in the opposite manner to an up counter, decrementing its count value with each clock pulse applied to its input. 

Down counters are commonly used in digital systems for tasks such as countdown timers, event sequencing, and control logic operations.

A Down Counter is a digital circuit that counts events by decrementing its value sequentially. It is characterized by its ability to count downwards, moving from a higher count to a lower count. The Down Counter is widely applied in digital systems for tasks such as countdowns and frequency division. Various flip-flops, such as JK or D flip-flops, can be employed to implement a Down Counter.
```

---
## <span id="up-down-counter">Assignment 15</span> - Up Down Counter

```
An Up-Down Counter is a digital circuit that can count both upwards and downwards, allowing for versatile counting operations in digital systems. 
Unlike traditional up counters or down counters, which can only count in one direction, up-down counters can alternate between incrementing and decrementing their count value based on a control signal.

An Up-Down Counter is a digital circuit designed to count events in both an upward and downward direction. It integrates the features of both Up Counters and Down Counters, allowing bidirectional counting. This counter is particularly valuable in applications where the count direction needs to be dynamically adjusted. Implementation can involve using a combination of flip-flops, such as JK or D flip-flops.
```

---
## <span id="decade-counter">Assignment 16</span> - Decade Counter

```
A Decade Counter is a digital circuit that counts in base-10 (decimal) sequence, typically from 0 to 9, before resetting to 0 and repeating the counting cycle. It is commonly used in digital systems for applications such as frequency division, timekeeping, and event sequencing, where counting in tens is desirable.

A decade counter, utilizing the IC 7490, embodies a digital circuit designed to sequentially count through the decimal numbers 0 to 9 in binary form. The IC 7490, a 4-bit binary counter, plays a pivotal role in achieving this counting sequence.
```

---
## <span id="sequence-detector">Assignment 17</span> - Sequence Detector

```
A Sequence Detector is a digital circuit that detects the presence of a specific sequence of binary inputs within a stream of binary data. 
It is commonly used in digital systems for tasks such as pattern recognition, data parsing, and sequence identification. 
Sequence detectors analyze the input data stream and generate an output signal when the specified sequence is detected.
```

---
## <span id="shift-registers">Assignment 18</span> - Shift Registrs

```
Shift registers are digital circuits capable of storing and shifting binary data serially. 
They consist of a chain of flip-flops connected in series, with each flip-flop storing one bit of the data. 

Shift registers are widely used in digital systems for tasks such as data storage, serial-to-parallel conversion, parallel-to-serial conversion, and data manipulation.

A shift register is a type of digital circuit using a cascade of flip-flops where the output of one flip-flop is connected to the input of the next. They share a single clock signal, which causes the data stored in the system to shift from one location to the next.
```

---

## Authors

- [Advait Joshi](https://www.github.com/adv-AI-t)
- [Amey Kulkarni](https://www.github.com/ameyk2004)
- [Anshul Kalbande](https://www.github.com/anshulLuhsna)
- [Tirthraj Mahajan](https://www.github.com/tirthraj07)
- [Anurag Mandke](https://www.github.com/anuragmandke)
- [Rinit Jain](https://www.github.com/RinitJain)
- [Sarthak Kanganae](https://www.github.com/Sarthak-Kangane)

## Our Mentors

- [Dr. Geetanjali Kale](https://www.linkedin.com/in/dr-geetanjali-kale-17148922/)
- [Prof. Nikita Kapadnis]
- [Prof. Dipika Bhaiyya]
- [Prof. Pranali Navghare]
