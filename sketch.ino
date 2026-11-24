#include <Arduino_RouterBridge.h>
#include <MD_Parola.h>
#include <MD_MAX72xx.h>
#include <SPI.h>

#define HARDWARE_TYPE MD_MAX72XX::FC16_HW
#define MAX_DEVICES 4

#define CLK_PIN    13
#define DATA_PIN   11
#define CS_PIN     10

#define PUMP_PIN   7
#define BUZZER_PIN 6
#define SSR_PIN    8

// รีเลย์ปั๊ม: ปรับตามโมดูล (LOW = ติด, HIGH = ดับ สำหรับ Active LOW)
const int PUMP_ON_STATE  = LOW;
const int PUMP_OFF_STATE = HIGH;

// Active Buzzer: หากติดเมื่อสั่ง LOW ให้ใช้ LOW / HIGH; หากติดเมื่อสั่ง HIGH ให้สลับเป็น HIGH / LOW
const int BUZZER_ON  = LOW;
const int BUZZER_OFF = HIGH;

// SSR-25DA: ปกติสั่ง HIGH = เปิด (ON), LOW = ปิด (OFF)
const int SSR_ON_STATE  = HIGH;
const int SSR_OFF_STATE = LOW;

const unsigned long PUMP_ON_TIME  = 3000;
const unsigned long PUMP_OFF_TIME = 5000;

MD_Parola matrix = MD_Parola(HARDWARE_TYPE, DATA_PIN, CLK_PIN, CS_PIN, MAX_DEVICES);

void showBigText(const char* msg) {
  matrix.displayClear();
  matrix.displayText(msg, PA_CENTER, 0, 0, PA_PRINT, PA_NO_EFFECT);
  matrix.displayAnimate();
}

void beepOne(unsigned long durationMs = 70) {
  digitalWrite(BUZZER_PIN, BUZZER_ON);
  delay(durationMs);
  digitalWrite(BUZZER_PIN, BUZZER_OFF);
}

void setup() {
  Monitor.begin();
  delay(1500);
  Monitor.println("System starting...");

  pinMode(PUMP_PIN, OUTPUT);
  digitalWrite(PUMP_PIN, PUMP_OFF_STATE);

  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, BUZZER_OFF);

  pinMode(SSR_PIN, OUTPUT);
  digitalWrite(SSR_PIN, SSR_OFF_STATE);

  matrix.begin();
  matrix.setIntensity(8);
  matrix.displayClear();

  showBigText("RDY");
  beepOne(70);
  Monitor.println("System ready");
  delay(1000);
}

void loop() {
  // 1. เปิดปั๊ม + เปิด SSR-25DA + โชว์ ON + ดังติ้ดเดียว
  Monitor.println("Pump: ON | SSR: ON");
  digitalWrite(PUMP_PIN, PUMP_ON_STATE);
  digitalWrite(SSR_PIN, SSR_ON_STATE);
  showBigText("ON");
  beepOne(70);
  delay(PUMP_ON_TIME);

  // 2. ปิดปั๊ม + ปิด SSR-25DA + โชว์ OFF + ดังติ้ดเดียว + พัก
  Monitor.println("Pump: OFF | SSR: OFF (Delay)");
  digitalWrite(PUMP_PIN, PUMP_OFF_STATE);
  digitalWrite(SSR_PIN, SSR_OFF_STATE);
  showBigText("OFF");
  beepOne(70);
  delay(PUMP_OFF_TIME);
}
