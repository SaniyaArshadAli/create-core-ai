import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Users, Briefcase, Mail, Phone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CollaborationRequest {
  id: string;
  areaOfInterest: string;
  domain: string;
  projectType: string;
  teamMembersNeeded: string;
  notes: string;
  gender: string;
  status: "open" | "accepted" | "closed";
  contactInfo?: {
    email?: string;
    phone?: string;
  };
  acceptedBy?: string;
  createdAt: string;
}

const CollaborationBoard = () => {
  const [requests, setRequests] = useState<CollaborationRequest[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [filterDomain, setFilterDomain] = useState<string>("all");
  const [filterGender, setFilterGender] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("open");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    areaOfInterest: "",
    domain: "",
    projectType: "",
    teamMembersNeeded: "",
    notes: "",
    gender: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = () => {
    const stored = localStorage.getItem("collaborationRequests");
    if (stored) {
      setRequests(JSON.parse(stored));
    }
  };

  const saveRequests = (newRequests: CollaborationRequest[]) => {
    localStorage.setItem("collaborationRequests", JSON.stringify(newRequests));
    setRequests(newRequests);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newRequest: CollaborationRequest = {
      id: Date.now().toString(),
      areaOfInterest: formData.areaOfInterest,
      domain: formData.domain,
      projectType: formData.projectType,
      teamMembersNeeded: formData.teamMembersNeeded,
      notes: formData.notes,
      gender: formData.gender,
      status: "open",
      contactInfo: {
        email: formData.email,
        phone: formData.phone,
      },
      createdAt: new Date().toISOString(),
    };

    const updatedRequests = [newRequest, ...requests];
    saveRequests(updatedRequests);
    
    setFormData({
      areaOfInterest: "",
      domain: "",
      projectType: "",
      teamMembersNeeded: "",
      notes: "",
      gender: "",
      email: "",
      phone: "",
    });
    
    setShowForm(false);
    toast({
      title: "Request Posted!",
      description: "Your collaboration request is now visible to the community.",
    });
  };

  const handleAccept = (requestId: string) => {
    const updatedRequests = requests.map(req => {
      if (req.id === requestId) {
        return { ...req, status: "accepted" as const, acceptedBy: "Anonymous User" };
      }
      return req;
    });
    saveRequests(updatedRequests);
    toast({
      title: "Request Accepted!",
      description: "Contact information is now visible. Reach out to collaborate!",
    });
  };

  const handleClose = (requestId: string) => {
    const updatedRequests = requests.map(req => {
      if (req.id === requestId) {
        return { ...req, status: "closed" as const };
      }
      return req;
    });
    saveRequests(updatedRequests);
    toast({
      title: "Request Closed",
      description: "This collaboration request has been closed.",
    });
  };

  const filteredRequests = requests.filter(req => {
    if (filterDomain !== "all" && req.domain !== filterDomain) return false;
    if (filterGender !== "all" && req.gender !== filterGender) return false;
    if (filterStatus !== "all" && req.status !== filterStatus) return false;
    return true;
  });

  const domains = ["ML", "NLP", "Computer Vision", "Robotics", "Web Development", "Design", "Data Science", "Research"];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Collaboration Board</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find teammates, share projects, and build together with the AI community
          </p>
          <Button onClick={() => setShowForm(!showForm)} variant="cta" size="lg">
            {showForm ? "Cancel" : "Post a Request"}
          </Button>
        </div>

        {showForm && (
          <Card className="max-w-3xl mx-auto mb-12 shadow-smooth animate-fade-in border-2">
            <CardHeader>
              <CardTitle>Create Collaboration Request</CardTitle>
              <CardDescription>Share what you're looking for. Your contact info stays private until someone accepts.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="areaOfInterest">Area of Interest *</Label>
                    <Input
                      id="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      required
                      placeholder="e.g., AI Chatbot, Image Recognition"
                    />
                  </div>
                  <div>
                    <Label htmlFor="domain">Domain *</Label>
                    <Select value={formData.domain} onValueChange={(value) => setFormData({ ...formData, domain: value })} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                      <SelectContent>
                        {domains.map(domain => (
                          <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Input
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                      placeholder="e.g., Research, Product, Academic"
                    />
                  </div>
                  <div>
                    <Label htmlFor="teamMembersNeeded">Team Members Needed *</Label>
                    <Input
                      id="teamMembersNeeded"
                      value={formData.teamMembersNeeded}
                      onChange={(e) => setFormData({ ...formData, teamMembersNeeded: e.target.value })}
                      required
                      placeholder="e.g., 2-3 developers, 1 designer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender (for filtering)</Label>
                    <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Optional" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">Description / Notes *</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    required
                    placeholder="Describe your project and what kind of collaboration you're looking for..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email (shared after acceptance)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (shared after acceptance)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" variant="cta">
                  Post Request
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="mb-8 flex flex-wrap gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <Label>Filter by:</Label>
          </div>
          <Select value={filterDomain} onValueChange={setFilterDomain}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Domains</SelectItem>
              {domains.map(domain => (
                <SelectItem key={domain} value={domain}>{domain}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterGender} onValueChange={setFilterGender}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Any">Any</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">No requests found. Be the first to post!</p>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <Card key={request.id} className="shadow-smooth hover:shadow-lg transition-smooth border-2 animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={request.status === "open" ? "default" : request.status === "accepted" ? "secondary" : "outline"}>
                      {request.status.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{request.domain}</Badge>
                  </div>
                  <CardTitle className="text-xl">{request.areaOfInterest}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4" />
                    {request.projectType}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Team Needed:</p>
                    <p className="text-sm">{request.teamMembersNeeded}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Description:</p>
                    <p className="text-sm line-clamp-3">{request.notes}</p>
                  </div>
                  {request.gender && (
                    <div>
                      <p className="text-sm text-muted-foreground">Gender: {request.gender}</p>
                    </div>
                  )}
                  
                  {request.status === "accepted" && request.contactInfo && (
                    <div className="pt-3 border-t space-y-2">
                      <p className="text-sm font-semibold text-accent">Contact Information:</p>
                      {request.contactInfo.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${request.contactInfo.email}`} className="hover:underline">
                            {request.contactInfo.email}
                          </a>
                        </div>
                      )}
                      {request.contactInfo.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${request.contactInfo.phone}`} className="hover:underline">
                            {request.contactInfo.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {request.status === "open" && (
                    <Button onClick={() => handleAccept(request.id)} className="w-full mt-4" variant="cta">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Accept Request
                    </Button>
                  )}
                  
                  {request.status === "accepted" && (
                    <Button onClick={() => handleClose(request.id)} className="w-full mt-4" variant="outline">
                      Mark as Closed
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CollaborationBoard;
