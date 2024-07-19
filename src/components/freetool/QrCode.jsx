// src/QRCodeGenerator.js
import React, { useState, useRef } from 'react';
import QRCode from "react-qr-code";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../../css/qrcode.css'

const QRCodeGenerator = () => {
    const [inputValue, setInputValue] = useState('');
    const qrRef = useRef();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const downloadQRCode = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qrcode.png';
        link.click();
    };


    const shareQRCode = async () => {
        try {
            const canvas = qrRef.current.querySelector('canvas');
            const url = canvas.toDataURL('image/png');

            if (navigator.canShare && navigator.canShare({ files: [new File([], 'qrcode.png')] })) {
                const response = await fetch(url);
                const blob = await response.blob();
                const file = new File([blob], 'qrcode.png', { type: 'image/png' });

                await navigator.share({
                    files: [file],
                    title: 'QR Code',
                    text: 'Here is your QR code',
                });
            } else {
                alert('Sharing is not supported in your browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };


    const copyQRCode = async () => {
        try {
            const canvas = qrRef.current.querySelector('canvas');
            const blob = await new Promise((resolve) => canvas.toBlob(resolve));
            const item = new ClipboardItem({ 'image/png': blob });
            await navigator.clipboard.write([item]);
            alert('QR Code copied to clipboard');
        } catch (error) {
            console.error('Failed to copy QR code:', error);
        }
    };

    return (
        <div className='qr_code_main'>
            <Container>
                <h1 className='heading_qr_code'>QR Code Generator</h1>
                <Row>
                    <Col md={6}>
                        <div className='input_sec'>
                            <Form.Control
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter text or URL"
                            />
                        </div>
                        <Button onClick={downloadQRCode} disabled={!inputValue} className='down_qr_btn btn-secondary'>
                            Download
                        </Button>
                        <Button onClick={shareQRCode} disabled={!inputValue} className='down_qr_btn btn-secondary'>
                            Share
                        </Button>
                        <Button onClick={copyQRCode} disabled={!inputValue} className='down_qr_btn btn-secondary'>
                            copy
                        </Button>

                    </Col>
                    <Col md={6}>
                        <div ref={qrRef} className='qr_code'>
                            <QRCode
                                value={inputValue ? inputValue : "brandclever.in"}
                                style={{ width: '300px', height: '300px' }}
                                // imageSettings={{ src: "favicon.ico", height: 30, width: 30, excavate: true }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default QRCodeGenerator;
