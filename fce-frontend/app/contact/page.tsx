import { Input, TextArea, Button, Card } from "@heroui/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-4">
                    <Card className="border-none bg-slate-50 shadow-none">
                        <CardBody className="p-6">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-bold">Our Location</p>
                                        <p className="text-slate-600">Honiara, Solomon Islands</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-bold">Email Us</p>
                                        <p className="text-slate-600">famcarepharma@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-bold">Phone Lines</p>
                                        <p className="text-slate-600">7470344 / 7593550 / 7717748</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="p-4 shadow-sm border border-slate-100">
                        <CardBody className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input label="Full Name" placeholder="Enter your name" variant="bordered" />
                                <Input label="Email Address" placeholder="Enter your email" type="email" variant="bordered" />
                            </div>
                            <Input label="Subject" placeholder="General Inquiry / Wholesale" variant="bordered" />
                            <TextArea label="Message" placeholder="How can we help you today?" variant="bordered" minRows={6} />
                            <Button color="primary" size="lg" className="w-full font-bold">
                                Send Message
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}