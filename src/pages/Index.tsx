import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const models = [
    {
      id: 1,
      name: 'Kiosk Pro 24',
      description: 'Профессиональный киоск с 24" экраном для торговых центров',
      image: '/img/f078f109-92d4-44ff-bdfc-4b04de137c5b.jpg',
      available: true,
      features: ['24" сенсорный экран', 'Встроенный принтер', 'NFC-модуль']
    },
    {
      id: 2,
      name: 'Kiosk Compact 15',
      description: 'Компактная модель с 15" экраном для небольших помещений',
      image: '/img/3a332c4c-a4ff-4730-a1ad-2f6cd4ce7af6.jpg',
      available: true,
      features: ['15" сенсорный экран', 'Компактный дизайн', 'Wi-Fi модуль']
    },
    {
      id: 3,
      name: 'Kiosk Ultra 32',
      description: 'Премиум модель с 32" экраном и расширенным функционалом',
      image: '/img/f078f109-92d4-44ff-bdfc-4b04de137c5b.jpg',
      available: false,
      features: ['32" 4K экран', 'AI-ассистент', 'Биометрия']
    },
    {
      id: 4,
      name: 'Kiosk Outdoor',
      description: 'Защищенная модель для установки на улице',
      image: '/img/3a332c4c-a4ff-4730-a1ad-2f6cd4ce7af6.jpg',
      available: false,
      features: ['Защита IP65', 'Антивандальный корпус', 'Автояркость']
    }
  ];

  const advantages = [
    {
      icon: 'Calendar',
      title: 'Гибкие сроки аренды',
      description: 'От 1 дня до долгосрочных контрактов'
    },
    {
      icon: 'Settings',
      title: 'Полное обслуживание',
      description: 'Установка, настройка и техподдержка включены'
    },
    {
      icon: 'Wrench',
      title: 'Быстрая замена',
      description: 'Замена оборудования в течение 24 часов при поломке'
    },
    {
      icon: 'Link',
      title: 'Кастомизация',
      description: 'Настройка интерфейса под ваши задачи'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/files/7f3b23e1-4295-4263-8e2e-4c62190f7c7c.png" alt="ArendaSmart" className="h-10 w-10" />
            <span className="text-xl font-bold">ArendaSmart</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#models" className="text-sm font-medium hover:text-primary transition-colors">Модели</a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            <Button asChild variant="outline">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Купить киоск
                <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Аренда интерактивных киосков
                </h1>
                <p className="text-lg text-muted-foreground">
                  Современные решения для автоматизации обслуживания клиентов. 
                  Гибкие условия аренды и полная техническая поддержка.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                    onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Выбрать модель
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="transition-all hover:scale-105 active:scale-95"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Связаться с нами
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] flex items-center justify-center animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/files/ff52aecb-f548-4b27-b079-c1407a3af9db.png" 
                  alt="Interactive Kiosk" 
                  className="h-full w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-16 border-b">
          <PartnersSection />
        </section>

        <section id="models" className="py-20 bg-muted/30">
          <ModelsSection models={models} />
        </section>

        <section id="advantages" className="py-20">
          <AdvantagesSection advantages={advantages} />
        </section>

        <section id="contact" className="py-20 bg-muted/30">
          <ContactSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/7f3b23e1-4295-4263-8e2e-4c62190f7c7c.png" alt="ArendaSmart" className="h-8 w-8" />
              <span className="font-semibold">ArendaSmart</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function PartnersSection() {
  const { ref, isInView } = useInView();
  
  const partners = [
    { name: 'TechCorp', icon: 'Building2' },
    { name: 'RetailMax', icon: 'ShoppingBag' },
    { name: 'HealthPlus', icon: 'Heart' },
    { name: 'BankSecure', icon: 'Landmark' },
    { name: 'FoodChain', icon: 'UtensilsCrossed' },
    { name: 'AutoService', icon: 'Car' },
  ];

  return (
    <div ref={ref} className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className={`text-2xl md:text-3xl font-bold transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Нам доверяют
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <div 
            key={partner.name}
            className={`flex flex-col items-center gap-3 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Icon name={partner.icon} className="h-10 w-10 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModelsSection({ models }: { models: any[] }) {
  const { ref, isInView } = useInView();
  
  return (
    <div ref={ref} className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Наши модели
        </h2>
        <p className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Выберите подходящий киоск для вашего бизнеса
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model, index) => (
          <Card key={model.id} className={`overflow-hidden hover:shadow-xl transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
            <div className="relative h-48">
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-full object-cover"
              />
              {model.available ? (
                <Badge className="absolute top-3 right-3 bg-green-500">Доступно</Badge>
              ) : (
                <Badge className="absolute top-3 right-3 bg-amber-500">В разработке</Badge>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{model.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
              <ul className="space-y-2 mb-4">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full transition-all hover:scale-105 active:scale-95" 
                disabled={!model.available}
                onClick={() => model.available && document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {model.available ? 'Арендовать' : 'Скоро доступно'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AdvantagesSection({ advantages }: { advantages: any[] }) {
  const { ref, isInView } = useInView();
  
  return (
    <div ref={ref} className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Почему выбирают нас
        </h2>
        <p className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Преимущества аренды наших киосков
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((advantage, index) => (
          <div 
            key={index} 
            className={`text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Icon name={advantage.icon} className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{advantage.title}</h3>
            <p className="text-muted-foreground">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection({ formData, setFormData, handleSubmit }: any) {
  const { ref, isInView } = useInView();
  
  return (
    <div ref={ref} className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Свяжитесь с нами
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Оставьте заявку и мы свяжемся с вами в ближайшее время
          </p>
        </div>
        <Card className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Сообщение" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full transition-all hover:scale-105 active:scale-95" size="lg">
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Index;